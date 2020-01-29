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

    var size= window.matchMedia("(max-width: 1024px)");
    var tiny= window.matchMedia("(max-width: 575px)");
    console.log(size);
    console.log(tiny);
   if(size.matches === true && tiny.matches== false){
       $("input").attr("size", "50")
   } else if(tiny.matches === true && size.matches=== true){
       $("input").attr("size", "15")
   };
});