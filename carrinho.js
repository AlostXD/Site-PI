const btnFazerPedido = document.getElementById("fazer-pedido");
const ulCarrinho = document.getElementById("carrinho-lista");
const resumoQuantidade = document.getElementById("resumo-quantidade");
let carrinho = JSON.parse(window.localStorage.getItem("carrinho")) || [];

var mensagem = `Olá, tenho interesse nos seguintes itens: `;


let telefone = 3497743681

btnFazerPedido.addEventListener("click", () => {
    console.log(carrinho.length)
    if (carrinho.length > 0) {
        carrinho.forEach(item => {
            mensagem = mensagem + "%0a→ " + 1 + " unidade do produto " + item.nome;
        })
        window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`);
    }
    else {
        window.alert("Você Não tem itens no carrinho... Tente adicionar alguma coisa!")
    }
})


let elementoValorCarrinho = document.getElementById("valor-total")
let valorCarrinho = 0;

function montaCarrinho() {
    resumoQuantidade.innerText = `Total (${carrinho.length} itens)`;
    valorCarrinho = 0;
    carrinho.forEach(produto => {
        valorCarrinho = valorCarrinho + produto.preco;
        const liProduto = document.createElement("li");
        liProduto.className = "carrinho-item";
        liProduto.innerHTML = `
        <img src=${produto.img} alt=${produto.nome}>
        <div class="carrinho-item-text">
            <h3>
            ${produto.nome}
            </h3>
            <span id="preco-produto">R$ ${produto.preco}</span>
            <a href="#" class="btn-remover-item" onclick="removerdoCarrinho(${produto.id})" ><img src="img/lixeira-carrinho.png"></a>
        </div>
    `
        ulCarrinho.appendChild(liProduto);
        if (carrinho.length == 0) {
            elementoValorCarrinho.innerText = "R$00.00"
        }
        else {

            elementoValorCarrinho.innerText = "R$ " + valorCarrinho.toFixed(2)
        }
    })

}

montaCarrinho();

function removerdoCarrinho(id) {
    var index = carrinho.findIndex(produto => produto.id == id);
    carrinho.splice(index, 1);
    ulCarrinho.innerHTML = "";
    resumoQuantidade.innerText = `Total (${carrinho.length} itens)`;
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    montaCarrinho();
    elementoValorCarrinho.innerText = "R$ " + valorCarrinho.toFixed(2)
    window.localStorage.setItem("qtdCarrinho", carrinho.length);
    qtdCarrinho.innerText = carrinho.length;   
}


let dropdownMenu = document.getElementById("dropdown-categoria");
let dropitem = document.getElementById("dropdown-item");
let dropdownArrow = document.getElementById("seta-dropdown")
let dropstatus = false;

dropdownMenu.addEventListener('click', () => {
    console.log(dropdownMenu)
    if (dropstatus == false) {
        console.log("mostrando dropdown")
        dropitem.style.display = "flex";
        dropitem.style.flexDirection = "Column";
        dropitem.style.color = "#000";
        dropstatus = true;
        dropdownArrow.style.rotate = "90deg";
    }
    else if (dropstatus == true) {
        console.log("escondendo o texto")
        dropitem.style.display = "none";
        dropdownArrow.style.rotate = "-0deg";
        dropstatus = false;
    }
})

/* ADICIONA AO CARRINHO */
const qtdCarrinho = document.getElementById("numero-carrinho");
window.localStorage.setItem("qtdCarrinho", carrinho.length);
qtdCarrinho.innerText = carrinho.length;
