console.log($)
console.log(moment);

$(document).ready(function(){
    var stamp= $("#timestamper");
    var record= $("#recorder");
    var saver= $(".saveState");

    stamp.text(moment().format(" h:mm a, MMMM Do YYYY"));

    displayrecord();

    saver.on("click", function(event){
        event.preventDefault();
        var rec= record.val();
        
        localStorage.setItem("Agenda", rec);
        displayrecord();
    });

    $("form").on("submit", function(event){
        event.preventDefault();
    });

    function displayrecord(){
    record.attr("value", localStorage.getItem("Agenda"))
    };

});