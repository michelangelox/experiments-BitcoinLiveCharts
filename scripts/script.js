jQuery(document).ready(function($) {

    // Header -------------------------------------------------------------------------------------

    //Language selector in the header
    //var languageSelector = ""
    //$("#search").after(
    //    jQuery('<div/>', {
    //        id: 'lang_sel_header'
    //    }).append(
    //            "<ul>" +
    //                "<li>" +
    //                "<a rel='alternate' hreflang='en' href='/' class='lang_sel_sel'>"+
    //                "<img src='/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png' alt='en' class='iclflag'>" +
    //                "English" +
    //                "</a>" +
    //                "</li>" +
    //                "<li>" +
    //                "<a rel='alternate' hreflang='es' href='/es/' class='lang_sel_sel'>" +
    //                "<img src='/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png' alt='es' class='iclflag'>" +
    //                "EspaÃ±ol" +
    //                "</a>" +
    //                "</li>" +
    //                "</ul>"
    //        )
    //);

		// Callout click event -------------------------------------------------------------------------
		//$('a#callout').unbind();
		//$('a#callout').click(function() {
		//		usernoise.window.show();
		//		return false;
		//});
	
		//Contact us click event -----------------------------------------------------------------------
		//$("li.page-item-369 a").prop('href', '');
		//$("li.page-item-369 a").click(function () {
		//		usernoise.window.show();
		//		return false;
		//});
	
		//UserNoise ------------------------------------------------------------------------------------
		//$("un-types-wrapper:first-child").removeClass("selected");
		//$("un-types-wrapper:nth-child(2)").addClass("selected");
		
    //Ticker ---------------------------------------------------------------------------------------

    //$('#container').append('<br/><p>End of code flag</p>');
    
    // Content -------------------------------------------------------------------------------------

    //Posted by removal of hyperlink
    //$('a[title="Posts by Miguel Moreno"]').each(function () {
    //    $(this)
    //        .css('cursor', 'default');

    //    $(this).click(function(e) {
    //        e.preventDefault();
    //    });
    //});


    // Footer -------------------------------------------------------------------------------------

    //Copyright
    //var copyright = "Copyright &copy; " + new Date().getFullYear() + " bitcoinbit.com";
    //$("p#copyright").html(copyright);


var source = "./stats.php";
    
    jQuery.getJSON(source, function(data) {
        jQuery.each(data, function(key, val) {

            switch(key) {
                case "market_price_usd":
                    jQuery(".market_price_usd .hgr_number_string").attr("data-to", val);
                    break;
                    
                case "totalbc":
                    jQuery(".totalbc .hgr_number_string").attr("data-to", val/100000000);
                    break;
                
                /*    
                case "market_cap":
                    jQuery(".market_cap .hgr_number_string").html(jQuery.trim(val).substring(0, 6));
                    break;
                   
                case "hash_rate":
                    jQuery(".hash_rate .hgr_number_string").html(jQuery.trim(val).substring(0, 6));
                    break;   
                */  
            }
        });
    });
});