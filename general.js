$(document).ready(function() {  
  var caller = 0;
  Cookies.set("caller","g");
  $("button").click(function() {
    $("#table").html("");    
    $("#table").append("<tr>"+"<td>" + "Function" + "</td><td>" + "Description" +"</td></tr>");
  });  
});
