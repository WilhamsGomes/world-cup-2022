const card = document.querySelector("#cartas")
card.addEventListener("mouseover", () => {
    card.classList.toggle("flip")
})

const card2 = document.querySelector("#cartas2")
card2.addEventListener("mouseover", () => {
    card2.classList.toggle("flip2")
})