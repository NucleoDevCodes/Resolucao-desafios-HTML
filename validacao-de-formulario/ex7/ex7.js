//value: {
      //files: {
       // extensions: ['jpeg', 'jpg', 'png'],
      //},
   // },


const validador = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
});
 
validador.addField("#anexo",[
  {rule:'required', errorMessage:"Este campo é obrigatório!"},
  {
    rule: 'files',
    value: {
      files: {
        extensions: ['jpeg', 'jpg', 'png'],
      },
    },
    errorMessage: 'Por favor, envie uma imagem válida (JPG, JPEG ou PNG)',
  },
])