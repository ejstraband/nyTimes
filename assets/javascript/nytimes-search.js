var startYear;
var endYear;
var searchTerm;
var resultCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Built by LucyBot. www.lucybot.com


$('#iprfmsearch').on('click', function() {

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({ searchTerm, startYear, endYear, resultCount, 
	  'api-key': "d8857128694749bcb21ca10d28a472a4"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {

		var response = result.data;
	  	console.log(result);

	  	
	});
});