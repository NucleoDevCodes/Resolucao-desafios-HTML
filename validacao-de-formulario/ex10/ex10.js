///^[A-Z]{3}\d{9}[A-Z]{2}$/

const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#rastreio", [
  { rule: 'required', errorMessage: "Este campo é obrigatório!" },
  {
    rule: 'customRegexp',
    value: /^[A-Z]{3}\d{9}[A-Z]{2}$/,
    errorMessage: "Código de rastreio inválido. Ex: FST123456789BR"
  }
]);