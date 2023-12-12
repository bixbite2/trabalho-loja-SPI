function pega_livro() {
	let params = new URLSearchParams(document.location.search);
	let livro = params.get("book");
	return livro
}
