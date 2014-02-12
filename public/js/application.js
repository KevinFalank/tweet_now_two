$(document).ready(function() {


  $("#tweet_single").submit(function(e){
    e.preventDefault();
    console.log("I made it here");
    alert( "calling AJAX" );
    var data = $( this ).serialize();
    // alert(data);
    $.post( "/tweets", data, function() {
      alert( "success" );
    })
      .fail(function() {
        alert( "error" );
      });
  });

});
