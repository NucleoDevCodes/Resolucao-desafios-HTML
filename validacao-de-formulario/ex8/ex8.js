const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#ingresso", [
  {
    rule: 'maxNumber',
    value: 2,
    errorMessage: "Você pode selecionar no máximo 2 ingressos!"
  }
])