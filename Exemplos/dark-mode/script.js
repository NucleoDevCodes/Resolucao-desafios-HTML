const button = document.getElementById('toggle-dark-mode');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
