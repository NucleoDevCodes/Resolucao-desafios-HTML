const validador = new JustValidate('#form', {
    errorFieldCssClass: 'invalid',
  });
  
validador.addField("#anexo",[
  {rule:'required', errorMessage:"Este campo é obrigatório!"},
  {
    rule: 'minFilesCount',
    value: 1,
    errorMessage:"Você precisa anexar pelo menos 1 anexo"
  }
])