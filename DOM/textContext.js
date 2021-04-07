// Manipulando conteúdo
// textContent
// const element = document.querySelector('h1')
// element.textContent += " Olá Devs!"

// console.log(element.textContent)

// innerText
// element.innerText = "Olá Devs!"

// element.innerHTML = "Olá Devs! <small>!!!</small>"

// const element = document.querySelector('input')
// console.log(element.value)
// element.value = "outro valor"

// Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')
header.setAttribute('class', 'bg header')