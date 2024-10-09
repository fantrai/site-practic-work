const layer = document.getElementById('layer');
document.querySelector('button').addEventListener("click", () => {
  layer.style.display = 'block';
});
layer.addEventListener('click', (e) => {
  if (e.target === layer) {
    layer.style.display = 'none';
  }
});