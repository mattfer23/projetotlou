const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indice)  => {
    botao.addEventListener('click', ()  => {
    desativarBotaoSelecionado();

    botao.classList.add('selecionado');

    esconderImagemAtiva();

    console.log(imagens);
    imagens[indice].classList.add('ativa');
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
