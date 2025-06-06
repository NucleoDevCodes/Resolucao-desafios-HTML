const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#texto", [
  { rule: 'required', errorMessage: "Este campo é obrigatório!" },
  {
    rule: 'minLength',
    value: 10,
    errorMessage: 'O título deve ter no mínimo 10 caracteres',
  },
  {
    rule: 'maxLength',
    value: 200,
    errorMessage: 'O título deve ter no máximo 200 caracteres',
  },
])