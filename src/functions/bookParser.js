export const bookParser = (bookList) => {
	let result = [];
	for (let index = 0; index < bookList.length; index++) {
		const book = bookList[index];
		let a = book.volumeInfo.authors === undefined ? "Автор неизвестен" : book.volumeInfo.authors.toString();
		let el = {
			title: book.volumeInfo.title,
			key: book.id,
			image: (book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.smallThumbnail),
			authors: a
		}
		result.push(el)
	}
	return result;
}
