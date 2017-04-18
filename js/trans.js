function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

function TransLetter(sourceText) {
	var sourceLang = 'auto';
	var targetLang = 'en';

	var url = "https://translate.googleapis.com/translate_a/single?client=gtx" + "&dt=rm&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
	var result = JSON.parse(httpGet(url));

	if (result.length > 0 && result[0].length > 1 && result[0][1].length > 3 ) {
		return result[0][1][3];
	}
	return "";
}

function Trans(source) {
	console.log(TransLetter(source))
	var splitter = new GraphemeSplitter();

	tokens = splitter.splitGraphemes(source)	

	for (var i = 0; i < tokens.length; i++) {
		console.log(tokens[i], TransLetter(tokens[i]))
	}
}