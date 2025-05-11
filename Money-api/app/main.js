const usdInput = document.getElementById('usd');
const brlInput = document.getElementById('brl');

const apiKey = 'sua chave api'; 
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

let taxaDeCambio = 0;

// Função para converter de Dólar para Real
async function obterTaxaDeCambio() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            taxaDeCambio = data.conversion_rates.BRL;
            console.log(`1 USD = ${taxaDeCambio} BRL`);

            // Após obter a taxa, atualize o valor em BRL ou USD automaticamente
            adicionarEventos();
        } else {
            alert('Erro ao buscar as taxas de câmbio');
        }
    } catch (error) {
        alert('Erro na requisição: ' + error);
    }
}

// Função para adicionar os eventos de input
function adicionarEventos() {
    // Detecta mudança no campo USD
    usdInput.addEventListener('input', function() {
        const valorEmDolar = parseFloat(usdInput.value);
        if (!isNaN(valorEmDolar)) {
            const valorEmReal = (valorEmDolar * taxaDeCambio).toFixed(2);
            brlInput.value = valorEmReal;
        } else {
            brlInput.value = '';  // Limpa o campo se o valor inserido não for um número
        }
    });

    // Detecta mudança no campo BRL
    brlInput.addEventListener('input', function() {
        const valorEmReal = parseFloat(brlInput.value);
        if (!isNaN(valorEmReal)) {
            const valorEmDolar = (valorEmReal / taxaDeCambio).toFixed(2);
            usdInput.value = valorEmDolar;
        } else {
            usdInput.value = '';  // Limpa o campo se o valor inserido não for um número
        }
    });
}

// Chama a função para obter a taxa de câmbio ao carregar a página
obterTaxaDeCambio();
