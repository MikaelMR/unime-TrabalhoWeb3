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
}

function removerPedidos(event) {
    var butaoClicado = event.target
    butaoClicado.parentElement.parentElement.remove()
    updatePedidosTotal()
}

function updatePedidosTotal() {
    var pedidosItemContainer = document.getElementsByClassName('pedidosItens')[0]
    var pedidosLinhas = pedidosItemContainer.getElementsByClassName('pedidosLinha')
    var total = 0
    for (var i = 0; i < pedidosLinhas.length; i++) {
        var pedidosLinhaSing = pedidosLinhas[i]
        var precoElement = pedidosLinhaSing.getElementsByClassName('pedidosPreco')[0]
        var quantElement = pedidosLinhaSing.getElementsByClassName('pedidosQuanInput')[0]
        var preco = parseFloat(precoElement.innerText.replace('R$', ''))
        var quantidade = quantElement.value
        total = total + (preco * quantidade)
        document.getElementsByClassName('pedidosTotalPreco')[0].innerText = 'R$ ' + total
        console.log(preco, quantidade, total)
    }
    
}

