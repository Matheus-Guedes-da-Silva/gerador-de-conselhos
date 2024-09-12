const botaoConselho = document.querySelector(".container-botao")
const numeroDoConselho = document.querySelector(".aviso")
const textoConselho = document.querySelector(".conselho")

botaoConselho.addEventListener("click", gerarConselho)

async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json();

    const novoAviso = `ADVICE #${json.slip.id}`
    const novoConselho = `"${json.slip.advice}"`

    numeroDoConselho.innerHTML = novoAviso
    textoConselho.innerHTML = novoConselho
}