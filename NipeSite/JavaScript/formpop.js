const modal = document.getElementById("myModal");
const btn = document.querySelector(".openModalBtn");
const span = document.getElementById("close");
// Открыть модальное окно при нажатии на кнопку


btn.onclick = function(){
  modal.style.display = 'block';
  console.log(modal);
}
// Закрыть модальное окно при нажатии на (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Закрыть модальное окно при клике вне области содержимого
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}