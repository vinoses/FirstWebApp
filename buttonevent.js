$(document).ready(function() {  
  $("button").click(function() {
    var id = $(event.srcElement).attr('id');
    var app = false;  

    //getJSON parses json into objects
    $.getJSON("https://api.myjson.com/bins/1bykxi", function( data ) {
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
          $("h1").text("Javascript - Just the 80/20");
          $("h2").text("Also: Async/Await - Async Control Flow - " + 
          "Promise.all - Destructuring & Default Values - Truthy/Falsy Values," +
          "Chaining - Class Properties & Binding - Bundling and Transpiling");    
        }
      } 

      //jQeury button event
      else if (id === "jq") {
        pieces = data.jqueryfunctions;
        if($("table").is(':visible')){         
          $("h1").text("jQuery - Just the 80/20");
          $("h2").text("")
               .append("<div> <a href=\"https://github.com/nefe/You-Dont-Need-jQuery\">but... You Dont Need jQuery</a> </div>");
        }
      }

      //CSS button event
      else if (id === "css") {
        pieces = data.cssfunctions;
        if($("table").is(':visible')){         
          $("h1").text("css is all grown up - CSS3");
          $("h2").text("GOT... the new Highlander!");               
        }
      };
      
      //Table Creation
      $.each(pieces, function(key, val) {
        $("#table").append(
              "<tr id=tr" + count + ">" + 
              "<td>" + val.function + "</td>" + 
              "<td>" + val.description +"</td>" + 
              "</tr>"); 
        if(val.link){
          $("#tr" + count).append("<div><a  href=" + '"' + val.link + '"' + "></div>");
        } 
        app=false; count++;


      });
    }; 
  });  
});

