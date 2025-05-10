const switchModal = () => {
  const modal = document.getElementById('modal')
  const style = modal.style.display

  if (modal.style.display === 'block') {
    modal.style.display = 'none'

  } else {
    modal.style.display = 'block'
  }

}

const btn = document.getElementById('modalBtn')
btn.addEventListener('click' , switchModal)

window.onclick = function(event) {
  const modal = document.getElementById('modal')
  if(event.target === modal) {
    switchModal();
  }

}






