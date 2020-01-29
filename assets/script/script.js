console.log($)
console.log(moment);

$(document).ready(function(){
    var stamp= $("#timestamper");
    var saver= $(".saveState");

    stamp.text(moment().format(" h:mm a, MMMM Do YYYY"));

    displayrecord();

    saver.on("click", function(event){
        event.preventDefault();
        
        for(var i=0; i<9; i++){ 
        localStorage.setItem("Agenda 0"+i, $("#recorder"+i).val());
        };
        
    });

    $("form").on("submit", function(event){
        event.preventDefault();
    });

    function displayrecord(){
        for(var i=0; i<9; i++){ 
    $("#recorder"+i).attr("value", localStorage.getItem("Agenda 0"+i));
        };
    };

});