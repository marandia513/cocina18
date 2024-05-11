const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () =>{
    slider.scrollLeft -= 315
})

next.addEventListener('click', () =>{
    slider.scrollLeft += 315
})

// Controles Postres

const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')
const slider2 = document.querySelector('.slider2')

prev2.addEventListener('click', () =>{
    slider2.scrollLeft -= 300
})

next2.addEventListener('click', () =>{
    slider2.scrollLeft += 300
})

// Controles Panaderia

const prev3 = document.querySelector('.prev3')
const next3 = document.querySelector('.next3')
const slider3 = document.querySelector('.slider3')

prev3.addEventListener('click', () =>{
    slider3.scrollLeft -= 300
})

next3.addEventListener('click', () =>{
    slider3.scrollLeft += 300
})