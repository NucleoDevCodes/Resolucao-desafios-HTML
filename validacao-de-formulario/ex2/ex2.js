const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#participantes", [
  { rule: 'required', errorMessage: "Este campo é obrigatório!" },
  {
    rule: 'integer',
    errorMessage: "Por favor, insira um número inteiro!"
  }
])