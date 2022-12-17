let voucherResult = 1

const card = document.querySelector("#cartas")
card.addEventListener("mouseover", () => {
    card.classList.toggle("flip")
})

const card2 = document.querySelector("#cartas2")
card2.addEventListener("mouseover", () => {
    card2.classList.toggle("flip2")
})

function gerarResult(){

    if (voucherResult > 0){
        const argentina = document.getElementById("value_argentina")
        argentina.innerText = Math.floor(Math.random() * (4 - 0) + 0)
        const franca = document.getElementById("value_franca")
        franca.innerText = Math.floor(Math.random() * (4 - 0) + 0)
        voucherResult = voucherResult - 1;
    } else {
        alert("Ops. Parece que já foi gerado um palpite para você. Não gostou do resultado? 👀")
    }


}

