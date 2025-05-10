const button = document.querySelector('.menu__button')

button.addEventListener('click', funcaoCallback)

function funcaoCallback() {
  const menuNav = document.querySelector('.menu__nav')
  menuNav.classList.toggle('menu-active')
  
  button.textContent === "Abrir"
    ? button.textContent = "Fechar"
    : button.textContent = "Abrir"
}