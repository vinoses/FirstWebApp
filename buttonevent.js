$(document).ready(function() {  
  $("button").click(function() {
    var id = $(event.srcElement).attr('id');
    var app = false;
    //$("h2").text("Also consider: async / await, async control flow," + 
   //   "Promise.all, Destructuring & default values, Truthy & falsy values," +
   //   "Optional chaining,Class properties & binding, parcel bundling and transpiling");
        
    //getJSON parses json into objects
    $.getJSON("https://api.myjson.com/bins/9j806", function( data ) {
        createTable(data);      
    });

    //create from listing on functions.json on remote server
    function createTable( data ) {
      var count = 0;
      var pieces;
      if(id === "js"){
        pieces = data.javscriptfunctions;
      } else if (id === "jq") {
        pieces = data.jqueryfunctions;
      }
      
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

