function pega_livro() {
	// Como pegar os dados da url
	let params = new URLSearchParams(document.location.search);
	let livro = params.get("book"); // is the string "Jonathan"
	return livro
}
