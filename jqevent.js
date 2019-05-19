$(document).ready(function() { 
  $("#jq").click(function() {
    var app = false; 

    //getJSON parses json into objects
    $.getJSON("https://api.myjson.com/bins/9j806", function( data ) {
        createTable(data);      
    });

    //create from listing on functions.json on remote server
    function createTable( data ) {
      var count = 0;
      var jqdata = data.jqueryfunctions;
      $.each(jqdata, function(key, val) {
        $("#table").append(
              "<tr id=tr" + count + ">" + 
              "<td>" + val.function + "</td>" + 
              "<td>" + val.description +"</td>" + 
              "</tr>"); 
        app=false; count++;   
      });
    }; 

    Cookies.set("reciever", "jq");
    var c = Cookies.get("caller");
    if(c !== "jq") { 
      $("table").show(); 
    } else { 
      $("table").toggle(); 
    }
    Cookies.set('caller','jq');

  });  
});

