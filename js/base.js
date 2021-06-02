if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready) 
} else {
    ready()
}

function ready() {
    var removerPedidosButao = document.getElementsByClassName('butaoRMV')
    console.log(removerPedidosButao)
    for (var i = 0; i < removerPedidosButao.length; i++) {
        var button = removerPedidosButao[i]
        button.addEventListener('click', removerPedidos)
    }
    
    var quantidadeInput = document.getElementsByClassName('pedidosQuanInput')
    for (var i = 0; i < quantidadeInput.length; i++) {
        var input = quantidadeInput[i]
        input.addEventListener('change', quantidadeMudada)
    }

    var addPedidosButao = document.getElementsByClassName('butaoProdutos')
    for (var i = 0; i < addPedidosButao.length; i++) {
        var button = addPedidosButao[i]
        button.addEventListener('click', addPedidosClicado)
    }
}

/*BUTÃO DE REMOVER PRODUTOS DO CARRINHO*/
function removerPedidos(event) {
    var butaoClicado = event.target
    butaoClicado.parentElement.parentElement.remove()
    updatePedidosTotal()
}

/*EVITA A CAIXA DE QUANTIDADE FICAR NEGATIVA OU VAZIA*/
function quantidadeMudada(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatePedidosTotal()
}

/*BUTÃO PARA ADICIONAR PRODUTOS NO CARRINHO*/
function addPedidosClicado(event) {
    var button = event.target
    var itemProduto = button.parentElement.parentElement
    var nome = itemProduto.getElementsByClassName('conteudoProdutosNome')[0].innerText
    var preco = itemProduto.getElementsByClassName('conteudoProdutosPreco')[0].innerText
    console.log(nome, preco)
    addPedidosCarrinho(nome, preco)
    updatePedidosTotal()
}

/*ADICIONA PRODUTOS NO CARRINHO*/
function addPedidosCarrinho(nome, preco) {
    var carrinhoLinha = document.createElement('div')
    carrinhoLinha.classList.add('pedidosItensLinha')
    var carrinhoProdutos = document.getElementsByClassName('pedidosItens')[0]
    var carrinhoProdutosNomes = carrinhoProdutos.getElementsByClassName('pedidosNomeTitulo')
    for (var i = 0; i < carrinhoProdutosNomes.length; i++) {
        if (carrinhoProdutosNomes[i].innerText == nome) {
            alert('Você já adicionou esse item ao seu carrinho!')
            return
        }
    }
    var carrinhoLinhaConteudo = `
        <div class="pedidosNome pedidosColuna">
            <span class="pedidosNomeTitulo">${nome}</span>
        </div>
        <span class="pedidosPreco pedidosColuna" style="margin-top: 1em;">${preco}</span>
        <div class="pedidosQuan pedidosColuna">
            <input class="pedidosQuanInput" type="number" value="1">
            <button class="butao butaoRMV" type="button">REMOVER</button>
        </div>`
    carrinhoLinha.innerHTML = carrinhoLinhaConteudo
    carrinhoProdutos.append(carrinhoLinha)
    carrinhoLinha.getElementsByClassName('butaoRMV')[0].addEventListener('click', removerPedidos)
    carrinhoLinha.getElementsByClassName('pedidosQuanInput')[0].addEventListener('change', quantidadeMudada)
}

/*PEGA O VALOR DO CEP*/
/*function carrinhoCEP(){
    var cep = document.getElementById("pedidosTotalCEP").value
    var cepDigito = cep.charAt(0);

        if(cepDigito == 0) {
            var regiao = "Grande São Paulo"
            var frete = 15.00
        }
        if(cepDigito == 1) {
            var regiao = "Interior de São Paulo"
            var frete = 18.00
        }
        if(cepDigito == 2) {
            var regiao = "Rio de Janeiro e Espírito Santo"
            var frete = 20.00
        }
        if(cepDigito == 3) {
            var regiao = "Minas Gerais"
            var frete = 13.00
        }
        if(cepDigito == 4) {
            var regiao = "Bahia e Sergipe"
            var frete = 5.00
        }
        if(cepDigito == 5) {
            var regiao = "Pernambuco, Alagoas, Paraíba e Rio Grande do Norte"
            var frete = 12.00
        }
        if(cepDigito == 6) {
            var regiao = "Ceará, Piauí, Maranhão, Pará, Amazonas, Acre, Amapá e Roraima"
            var frete = 19.00
        }
        if(cepDigito == 7) {
            var regiao = "Distrito Federal, Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul e Rondônia"
            var frete = 14.00
        }
        if(cepDigito == 8) {
            var regiao = "Paraná e Santa Catarina"
            var frete = 22.00
        }
        if(cepDigito == 9) {
            var regiao = "Rio Grande do Sul"
            var frete = 25.00
        }
}*/

/*UPDATE DO PREÇO TOTAL COM CEP*/
function updatePedidosTotal() {
    var pedidosItemContainer = document.getElementsByClassName('pedidosItens')[0]
    var pedidosRows = pedidosItemContainer.getElementsByClassName('pedidosItensLinha')
    var total = 0
    for (var i = 0; i < pedidosRows.length; i++) {
        var pedidosRow = pedidosRows[i]
        var precoElement = pedidosRow.getElementsByClassName('pedidosPreco')[0]
        var quantElement = pedidosRow.getElementsByClassName('pedidosQuanInput')[0]
        var preco = parseFloat(precoElement.innerText.replace('R$', ''))
        var quantidade = quantElement.value
        var cep = document.getElementById("pedidosTotalCEP").value
        var cepDigito = cep.charAt(0)
        if(cepDigito == 0) {
            var regiao = "Grande São Paulo"
            var frete = 15.00
        }
        if(cepDigito == 1) {
            var regiao = "Interior de São Paulo"
            var frete = 18.00
        }
        if(cepDigito == 2) {
            var regiao = "Rio de Janeiro e Espírito Santo"
            var frete = 20.00
        }
        if(cepDigito == 3) {
            var regiao = "Minas Gerais"
            var frete = 13.00
        }
        if(cepDigito == 4) {
            var regiao = "Bahia e Sergipe"
            var frete = 5.00
        }
        if(cepDigito == 5) {
            var regiao = "Pernambuco, Alagoas, Paraíba e Rio Grande do Norte"
            var frete = 12.00
        }
        if(cepDigito == 6) {
            var regiao = "Ceará, Piauí, Maranhão, Pará, Amazonas, Acre, Amapá e Roraima"
            var frete = 19.00
        }
        if(cepDigito == 7) {
            var regiao = "Distrito Federal, Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul e Rondônia"
            var frete = 14.00
        }
        if(cepDigito == 8) {
            var regiao = "Paraná e Santa Catarina"
            var frete = 22.00
        }
        if(cepDigito == 9) {
            var regiao = "Rio Grande do Sul"
            var frete = 25.00
        }
        total = (total + (preco * quantidade)) + frete
        console.log(preco, quantidade, total, cepDigito, frete, regiao)
    }
    total = (Math.round(total * 100) / 100).toFixed(2)
    document.getElementsByClassName('pedidosTotalPreco')[0].innerText = 'R$ ' + total
}





