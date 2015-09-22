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

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}