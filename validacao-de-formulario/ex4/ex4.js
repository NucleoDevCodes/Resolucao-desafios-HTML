  const validador = new JustValidate('#form', {
    errorFieldCssClass: 'invalid',
  });
  
  validador.addField('#email', [
    { rule: 'required', errorMessage: 'Este campo é obrigatório' },
    {
      validator: (value) => value.endsWith('@techwizard.io'),
      errorMessage: 'O e-mail precisa ser corporativo (@techwizard.io)',
    },
  ]);