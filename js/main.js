console.log("Loaded.")

console.log(pega_livro())

//<div class="book">
//    <div class="cover" style="background-image: url(public/livros/hobbit.jpg);"></div>
//    <div class="name">O Hobbit</div>
//    <div class="price">R$ 59,90</div>
//    <button type="button" onclick="goToCart('hobbit')" class="button">Comprar</button>
//</div>






let cria_livro = (id) => {
    let livro = document.createElement('div')
    let capa = document.createElement('div')
    let nome = document.createElement('div')
    let preco = document.createElement('div')

    livro.classList.add('book')
    capa.classList.add('cover')
    nome.classList.add('name')
    preco.classList.add('price')

    capa.style.cssText += `background-image: url(public/livros/${id}.jpg)`;
    switch (id) {
        case 'fundacao':
                nome.appendChild(document.createTextNode("Trilogia Fundação"));
                preco.appendChild(document.createTextNode("R$ 119,90"));
            break;
        case 'hobbit':
                nome.appendChild(document.createTextNode("O Hobbit"));
                preco.appendChild(document.createTextNode("R$ 59,90"));
            break;
        case '1984':
                nome.appendChild(document.createTextNode("1984"));
                preco.appendChild(document.createTextNode("R$ 23,50"));
            break;
        case 'tomorrows':
                nome.appendChild(document.createTextNode("All the Tomorrows"));
                preco.appendChild(document.createTextNode("R$ 73,55"));
            break;
        case 'hamlet':
                nome.appendChild(document.createTextNode("Hamlet"));
                preco.appendChild(document.createTextNode("R$ 23,55"));
            break;
  
    }
    
    livro.appendChild(capa)
    livro.appendChild(nome)
    livro.appendChild(preco)

    return livro
}

let olivro = cria_livro(pega_livro())

$('#cart').append(olivro)


// Como pegar os dados da url
// let params = new URLSearchParams(document.location.search);
// let name = params.get("name"); // is the string "Jonathan"
// let age = parseInt(params.get("age"), 10); // is the number 18


//<div class={book}>
//    <div class={cover} style='background-image: url(public/livros/{book}.jpg);'></div>
//    <div class='name'>{book}</div>
//    <div class='price'>R$ {book_price}</div>
//</div>




//let historico = []
//
//
//$("#operar").click(function(){
//	var value1 =parseInt($("#value1").val());
//	var value2 =parseInt($("#value2").val());
//
//
//	operacao = $("#selecionar").val();
//	if (operacao == "Somar"){
//		resultado = value1+value2
//	}
//	if (operacao == "Subtrair"){
//		resultado = value1-value2
//	}
//	if (operacao == "Multiplicar"){
//		resultado = value1*value2
//	}
//	if (operacao == "Dividir"){
//		resultado = value1/value2
//	}
//
//	if (!isNaN(resultado)){
//		console.log(historico)
//		historico.push(resultado)
//		console.log(historico.length)
//		if (historico.length <= 10){
//			$("#resultado").html(resultado)
//			$("#historico").html("Histórico de resultados:"+historico+",")
//		} else {
//			console.log(historico)
//			historico.shift()
//			$("#historico").html("Histórico de resultados:"+historico)
//		}
//	}
//});

