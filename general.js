$(document).ready(function() {  
  var caller = 0;
  Cookies.set("caller","g");
  
  //general Button Event Handler
  $("button").click(function() {
    $("#table").html("");    
    $("#table").append("<tr>"+"<td>" + "Function" + "</td><td>" + "Description" +"</td></tr>");
  
  	//cookie based event handler, intuitive button response
    var id = $(event.srcElement).attr('id');
    Cookies.set("reciever", id);
    var c = Cookies.get("caller");
    if(c !== id) { 	
      $("table").show(); 
    } else { 
      $("table").toggle(); 
      if($("table").not(':visible')) {
      	trigger();
      }
    }
    Cookies.set("caller",id);

    dragonDance();

    //Dragon Image Resizing
    function dragonDance(){
      if($("table").is(':visible')){
  		$("#foot").css("height", "660px");
  	  } else {
  		$("#foot").css("height", "860px");
  	  }
    } 

  //Text Updates for no tables shown
  function trigger() {  	
    $("h1").text("Hey Sexy!");
    $("h2").text("Good to see you again!");
  };
  });
});
