const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#email", [
  { rule: 'required', errorMessage: "Este campo é obrigatório!" },
  {
    rule: 'email',
    errorMessage: "Digite um e-mail válido!"
  }
])
.addField("#senha",[
  {rule:'required', errorMessage:"Este campo é obrigatório!"},
  {
    rule:'password',
    errorMessage:"A senha precisa ter 8 caracteres, incluindo letras e números!"
  }
])