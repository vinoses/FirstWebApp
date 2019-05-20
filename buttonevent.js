$(document).ready(function() {  
  $("button").click(function() {
    var id = $(event.srcElement).attr('id');
    var app = false;  

    //getJSON parses json into objects
    $.getJSON("https://api.myjson.com/bins/9j806", function( data ) {
        createTable(data);      
    });

    //create objects of functions.json on remote server
    function createTable( data ) {
      var count = 0;
      var pieces;

      //Cookie based Event Handler, .text updates and data selection

      //javascript button event
      if(id === "js"){
        pieces = data.javscriptfunctions;
        if($("table").is(':visible')){ 
          $("h1").text("Javascript 80/20");
          $("h2").text("Also: Async/Await - Async Control Flow - " + 
          "Promise.all - Destructuring & Default Values - Truthy/Falsy Values," +
          "Chaining - Class Properties & Binding - Bundling and Transpiling");    
        }
      } 

      //jQeury button event
      else if (id === "jq") {
        pieces = data.jqueryfunctions;
        if($("table").is(':visible')){         
          $("h1").text("jQuery 80/20");
          $("h2").text("")
               .append("<div> <a href=\"https://github.com/nefe/You-Dont-Need-jQuery\">but... You Dont Need jQuery</a> </div>");
        }
      };
      
      //Table Creation
      $.each(pieces, function(key, val) {
        $("#table").append(
              "<tr id=tr" + count + ">" + 
              "<td>" + val.function + "</td>" + 
              "<td>" + val.description +"</td>" + 
              "</tr>"); 
        app=false; count++;   
      });
    }; 
  });  
});

