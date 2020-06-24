// Search Bar

$(document).ready(function() {
	$('#search').hideseek({
    list:           '.list',
    nodata:         'No Search Results',
    attribute:      'data-title',
  }
  );
});