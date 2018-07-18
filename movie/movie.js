$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input=$("input#to").val();
    $("ul").append("<li id='on'>input</li> ")
  });
  $("#hit").click(function(){
    $("#on").remove();
  });
});
