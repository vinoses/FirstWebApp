$(document).ready(function() {
  $("p").text("");
  $("#jqtable").hide();
  $("h1").text("Hey Sexy!");
  
  $("#jq").click(function() {
    $('#jq').text('jQuery');
    $("#jqtable").html("");

    $.ajaxSetup({ //required mime override for json, should be able svelte this
      beforeSend: function(xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      }
    });
    
    $("#jqtable").append("<tr>"+"<td>" + "Function" + "</td><td>" + "Description" +"</td></tr>");
    var c = true; var app = false; var des = ""; //for brute forced parsing, look for better method
   
    //getJSON parses json into objects
    $.getJSON("https://api.myjson.com/bins/ujtnq", function( data ) {
        createTable(data);      
    });

    //create from listing on functions.json on remote server
    function createTable( data ) {
      var count = 0;
      var jqdata = data.jqueryfunctions;
      $.each(jqdata, function(key, val) {
        $("#jqtable").append(
              "<tr id=tr" + count + ">" + 
              "<td>" + val.function + "</td>" + 
              "<td>" + val.description +"</td>" + 
              "</tr>"); 
        app=false; count++;   
      });
    }; 

    $("#jqtable").toggle();

  });  
});

