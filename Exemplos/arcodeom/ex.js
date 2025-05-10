const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordions) => {
   
accordions.addEventListener('click', function() {
 this.classList.toggle("active");
 const painel = this.nextElementSibling;

 if(painel.style.display === 'block') {

    painel.style.display = 'none'
 }else {
    painel.style.display = 'block'
 }

})

    

   
})
   







