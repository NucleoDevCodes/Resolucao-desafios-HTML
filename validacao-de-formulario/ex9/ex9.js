const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#senha", [
  { rule: 'required', errorMessage: "Este campo é obrigatório!" },
  {
    rule: 'strongPassword',
    errorMessage: "Você precisa de uma senha com no mínimo 8 dígitos, que tenha letras maiúsculas e minúsculas, números e caracteres especiais!"
  }
])
  .addField("#confirmacao", [
    { rule: 'required', errorMessage: "Este campo é obrigatório!" },
    {
      validator: (value) => value === document.querySelector('#senha').value,
      errorMessage: "As senhas devem ser iguais!"
    }
  ]);