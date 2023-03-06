const btnFazerPedido = document.getElementById("fazer-pedido");
const carrinho = [
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        imagem: "img/mascaracomelastico.png",
        id: 1
    },
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        imagem: "img/mascaracomelastico.png",
        id: 2
    },
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        imagem: "img/mascaracomelastico.png",
        id: 3
    },
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        imagem: "img/mascaracomelastico.png",
        id: 4
    },
    {
        nome: "Máscara com elástico ",
        preco: 29.90,
        imagem: "img/mascaracomelastico.png",
        id: 5
    }
]
var mensagem = `Olá, tenho interesse nos seguintes itens: `;
carrinho.forEach(item => {
    mensagem = mensagem + "%0a→ " + 1 + " unidade do produto " + item.nome;
})

btnFazerPedido.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=3497743681&text=" + mensagem);
})





function montaCarrinho(){
    let elementoValorCarrinho = document.getElementById("valor-total")
    let valorCarrinho = 0;
    const ulCarrinho = document.getElementById("carrinho-lista");
    carrinho.forEach(produto => {
        valorCarrinho = valorCarrinho + produto.preco;
        const liProduto = document.createElement("li");
        liProduto.className = "carrinho-item";
        liProduto.innerHTML = `
        <img src=${produto.imagem} alt=${produto.nome}>
        <div class="carrinho-item-text">
            <h3>
                ${produto.nome}
            </h3>
            <span id="preco-produto">R$ ${produto.preco}</span>
            <div>
                <a href="#" id="carrinho-item-menos">-</a>
                <input type="text" value=1>
                <a href="#" id="carrinho-item-mais">+</a>
            </div>
        </div>
    `
        ulCarrinho.appendChild(liProduto);
        elementoValorCarrinho.innerText = "R$ " + valorCarrinho.toFixed(2)
    })

}

montaCarrinho();

/* ADICIONA AO CARRINHO */
const qtdCarrinho = document.getElementById("numero-carrinho");
window.localStorage.setItem("qtdCarrinho", carrinho.length);
qtdCarrinho.innerText = carrinho.length;
