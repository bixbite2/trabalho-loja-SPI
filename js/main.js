console.log("Loaded.")

const books = [
    {
        name: "Trilogia Fundação",
        slang: "fundacao",
        price: 119.90,
        cover: "background-image: url(public/livros/fundacao.jpg)",
    },
    {
        name: "O Hobbit",
        slang: "hobbit",
        price: 59.90,
        cover: "background-image: url(public/livros/hobbit.jpg)",
    },
    {
        name: "1984",
        slang: "1984",
        price: 23.50,
        cover: "background-image: url(public/livros/1984.jpg)",
    },
    {
        name: "All the Tomorrows",
        slang: "altomorrows",
        price: 73.55,
        cover: "background-image: url(public/livros/altomorrows.jpg)",
    },
    {
        name: "Hamlet",
        slang: "hamlet",
        price: 23.55,
        cover: "background-image: url(public/livros/hamlet.jpg)",
    },
]

let get_livro_info = (id) => {
    let book = books.find(item => item.slang == id)
    if(book) return book
    else return null
}

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