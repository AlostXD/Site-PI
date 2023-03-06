
var products = [1,2,3,4,5,6,7,8,9]
var ulProducts = document.getElementById("product-list")
products.forEach(produto=> {
    var liProduct = document.createElement("li")
    liProduct.innerHTML = `<img class="img-produtos" src="img/mascaracomelastico.png" alt="">
    <p>Mascara com Elastico Azul Claro com 50 unidades - SP Protection</p>
    <div class="content-produtos-preço">
        <span class="preco-novo">R$ 19,90</span>
        <span class="preco-anterior">R$ 29,90</span>
        <input type="number" value=1 name="" id="">
        <button class="btn-adicionar" href="#">Adicionar</button>
    </div>
    <img src="img/icone-coracao.png" alt="" class="icone-favorito">`
    ulProducts.appendChild(liProduct)
})