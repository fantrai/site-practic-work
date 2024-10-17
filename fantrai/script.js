function aaa() {
	alert("Подсказка: вы можете нажать на кнопку");
}

function textChange(nameText) {
	let box = document.getElementById(nameText);
	alert("Пожалуйта, не нажимайте на клавиши!")
	box.value = "";
}