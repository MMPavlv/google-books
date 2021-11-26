export const loadBooks = (searchStruct) => {
	let category = (searchStruct.category === "all" ? "" : "+subject:" + searchStruct.category);
	return searchStruct.site + searchStruct.search + category + "&startIndex=" + searchStruct.startIndex + "&maxResults=" + searchStruct.maxResults
		+ "&orderBy=" + searchStruct.sort;
}
