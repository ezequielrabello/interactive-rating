const button = window.document.querySelectorAll('.button')
const submit = window.document.querySelector('#submit_Bto')
const screen2 = window.document.querySelector('.screen2')
const page = window.document.querySelector('.page')
const res = window.document.querySelector('span')
const selected_number = []



button.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('checked')
        selected_number.push(button.value)
    })
})

submit.addEventListener('click', () => {  
    screen2.classList.toggle('close')
    page.classList.toggle('close')  
    res.innerHTML = `${selected_number[selected_number.length - 1]}` 
})