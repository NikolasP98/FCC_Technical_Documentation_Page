const list = document.getElementsByClassName('nav-link');

for (let i = 0; i < list.length; i++) {
	console.log(list[i].parentElement);
	list[i].addEventListener('click', () => {
		list[i].parentElement.classList.toggle('active');
	});
}

console.log(list.length);
