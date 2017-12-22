var startYear;
var endYear;
var searchTerm;
var resultCount;


// Built by LucyBot. www.lucybot.com


$('#iPrfmSearch').on('click', function() {

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

$('#iClrSearch').on('click', function() {

	$('#iSearchFrame').clear();
	$('#iNumOfRecords').clear();
	$('#iStartYr').clear();
	$('#iEndYr').clear();
	$('#iResults').clear();

});