$(function(){

	$('#my-menu').mmenu({
		navbar:{title:'Церковь Добрая Весть'},
		"pageScroll": true,
		"iconPanels": true,
		"extensions":{ all: ["pagedim-black","fx-menu-slide"]},
		"setSelected": {
            "hover": true
         },
		
		"searchfield": {
			placeholder:"Поиск",
			noResults:"Результатов не найдено.",
            //"resultsPanel": true,
            "showTextItems": true,

		},
				
		 "navbars": [
            {
            	
               "position": "top",
               "content": [
                  "searchfield"
               ]
            },
            {
               "position": "top"
            }
         ]
	});

	var api = $('#my-menu').data('mmenu');
	api.bind("open:finish", function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind("close:finish", function(){
		$('.hamburger').removeClass('is-active');
	});
	

});