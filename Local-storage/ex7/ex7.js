const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addButton = document.getElementById("add-product");
const cartList = document.getElementById("cart-list");
 
// Recupera os produtos do localStorage ou inicializa um array vazio
let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
// Função para exibir os produtos na tela
function renderCart() {
  cartList.innerHTML = ""; // Limpa a lista antes de renderizar
  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.nome} - R$ ${product.preco} 
            <button class="remove" data-index="${index}">Remover</button>`;
    cartList.appendChild(li);
  });
 
  // Adiciona evento de clique para remover itens
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1); // Remove do array
      localStorage.setItem("cart", JSON.stringify(cart)); // Atualiza no localStorage
      renderCart(); // Re-renderiza a lista
    });
  });
}
 
// Adiciona um novo produto ao carrinho
addButton.addEventListener("click", () => {
  const nome = productNameInput.value.trim();
  const preco = parseFloat(productPriceInput.value.trim());
 
  if (nome && !isNaN(preco)) {
    cart.push({ nome, preco }); // Adiciona ao array
    localStorage.setItem("cart", JSON.stringify(cart)); // Salva no localStorage
    productNameInput.value = ""; // Limpa o input
    productPriceInput.value = "";
    renderCart(); // Atualiza a lista
  }
});
 
// Renderiza o carrinho ao carregar a página
renderCart();