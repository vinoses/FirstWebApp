$(document).ready(function() {  
  var caller = 0;
  Cookies.set("caller","g");
  $("button").click(function() {
    $("#table").html("");    
    $("#table").append("<tr>"+"<td>" + "Function" + "</td><td>" + "Description" +"</td></tr>");
  
    var id = $(event.srcElement).attr('id');
    Cookies.set("reciever", id);
    var c = Cookies.get("caller");
    if(c !== id) { 
      $("table").show(); 
    } else { 
      $("table").toggle(); 
    }
    Cookies.set("caller",id);

  });  
});
