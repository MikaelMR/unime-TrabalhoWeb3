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

}

function removerPedidos(event) {
    var butaoClicado = event.target
    butaoClicado.parentElement.parentElement.remove()
    updatePedidosTotal()
}

function quantidadeMudada(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatePedidosTotal()
}

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
        total = total + (preco * quantidade)
        console.log(preco, quantidade, total)
    }
    total = (Math.round(total * 100) / 100).toFixed(2)
    document.getElementsByClassName('pedidosTotalPreco')[0].innerText = 'R$ ' + total
}



