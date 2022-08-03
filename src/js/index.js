const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

function esconderCartaoSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.remove('selecionado')
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado')
}

btnAvancar.addEventListener('click', () => {
    if (cartaoAtual===cartoes.length-1) return

    esconderCartaoSelecionado(cartaoAtual)
    cartaoAtual++
    mostrarCartao(cartaoAtual)
})

btnVoltar.addEventListener('click', () => {
    if (cartaoAtual===0) return

    esconderCartaoSelecionado(cartaoAtual)
    cartaoAtual--
    mostrarCartao(cartaoAtual)
})