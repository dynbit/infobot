const axios = require('axios');

function processText(query, callback) {
	axios.post('http://localhost:5000/parse', { query: query, project: "current"})
		.then(function (response) {
			callback(query, response.data);
		})
		.catch(function (error) {
			console.log(error);
		})
}

var debugCallback = function(query, result) {
	console.log(query + ": " + result.intent.name + " (" + result.intent.confidence + ")")
	console.log(result.entities)
}

// processText("hi", debugCallback)
// processText("hello", debugCallback)
// processText("my name is Pranas", debugCallback)
// processText("labas", debugCallback)
// processText("please find restaurant in kaunas", debugCallback)
// processText("find restaurant", debugCallback)
// processText("kebab", debugCallback)
// processText("sweet tour", debugCallback)
// processText("find sweet tour", debugCallback)
// processText("candy tour", debugCallback)
// processText("find hospital", debugCallback)
// processText("sugihara museum", debugCallback)
// processText("find me asian food", debugCallback)
