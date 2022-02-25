const title = document.querySelector('.title');
const btn = document.getElementById('btn')

typeWrite(title)
function typeWrite(element) {
	const arrayText = element.innerHTML.split('');
	element.innerHTML = '';
	arrayText.forEach((letra, i) => {
		setTimeout(() => element.innerHTML += letra, 75 * i)
	})
}

btn.addEventListener('click', () => {
	const para = document.querySelector('section#contact > p')
	para.innerText = 'Haha! Pensou que eu ia dar meu número de sopa, era?'
	btn.innerText = 'TROLEI!'
	btn.style.fontWeight = 'bold'
})