

$(function(){
    $("#city_select").hide();  // By default use jQuery to hide the second modal

    // We can use the change(); function to watch the state of the select box and run some conditional logic every time it's changes to hide or show the second select box
    $("#country_select").change(function(){
        if( $("#country_select").is(":selected")){
            $("#city_select").hide();
        } else {
            $("#city_select").show();
        }
    });
});