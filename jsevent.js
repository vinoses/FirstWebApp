$(document).ready(function() {  
  $("#js").click(function() {
    $("h2").text("Also consider: \n async / await, async control flow," + 
      "Promise.all, Destructuring & default values, Truthy & falsy values," +
      "Optional chaining,Class properties & binding, parcel bundling and transpiling");
    var app = false; 
    
    //getJSON parses json into objects
    $.getJSON("https://api.myjson.com/bins/9j806", function( data ) {
        createTable(data);      
    });

    //create from listing on functions.json on remote server
    function createTable( data ) {
      var count = 0;
      var jsdata = data.javscriptfunctions;
      $.each(jsdata, function(key, val) {
        $("#table").append(
              "<tr id=tr" + count + ">" + 
              "<td>" + val.function + "</td>" + 
              "<td>" + val.description +"</td>" + 
              "</tr>"); 
        app=false; count++;   
      });
    }; 


    Cookies.set("reciever", "js");
    var c = Cookies.get("caller");
    if(c !== "js") { 
      $("table").show(); 
    } else { 
      $("table").toggle(); 
    }
    Cookies.set("caller","js");

  });  
});

