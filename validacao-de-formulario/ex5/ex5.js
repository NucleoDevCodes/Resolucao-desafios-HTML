//validator: (value) => {
   // const [hora, minuto] = value.split(':').map(Number);
   // return hora >= 8 && hora < 18;
//} 



const validador = new JustValidate('#form', {
    errorFieldCssClass: 'invalid',
  });
  
  validador.addField('#horario', [
    { rule: 'required', errorMessage: 'Este campo é obrigatório' },
    {
      validator: (value) => {
        const [hora, minuto] = value.split(':').map(Number);
        return hora >= 8 && hora < 18;
      },
      errorMessage: 'Horário inválido. As consultas são realizadas entre 08:00 e 18:00.',
    },
  ]);