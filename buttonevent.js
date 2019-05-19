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

      //Button Event Handlers
      if(id === "js"){
        pieces = data.javscriptfunctions;
        if($("table").is(':visible')){ 
          $("h1").text("Javascript 80/20");
          $("h2").text("Also consider: async / await, async control flow," + 
          "Promise.all, Destructuring & default values, Truthy & falsy values," +
          "Optional chaining,Class properties & binding, parcel bundling and transpiling");    
        }
      } else if (id === "jq") {
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

