$(document).ready(function() {
  $("p").text("");
  $("#jqtable").hide();
  var count = 0;
  $("h1").text("Hey Sexy!");
  $("#jq").click(function() {
    $('#jq').text('jQuery');
    $("#jqtable").html("");
    //$(this).text("Your Dirty!");
    $.ajaxSetup({
      beforeSend: function(xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      }
    });
    var jsonData = '{  "jqueryfunctions": [' +
      '{ "function": "find()", "description": "Selects elements based on the provided selector string" },' +
      '{ "function": "hide()", "description": "Hides an element if it was visible" },' +
      '{ "function": "show()", "description": "Shows an element if it was hidden"  },' +
      '{ "function": "html()", "description": "gets or sets an inner HTML of an element" },' +
      '{ "function": "append()", "description": "injects an element inot the DOM after the selected element" },' +
      '{ "function": "prepend()", "description": "injects an element into the DOM before the selected elmeent" },' +
      '{ "function": "on()", "description": "attaches an event listener to an element" },' +
      '{ "function": "off()", "description": "detaches an event listenr from an element" },' +
      '{ "function": "css()", "description": "gets or sets the style attribute value of an element" },' +
      '{ "function": "attr()", "description": "gets or sets any attribute of an element" },' +
      '{ "function": "val()", "description": "gets or sets the value attribue of an element" },' +
      '{ "function": "text()", "description": "gets the combined text of an element and its children" },' +
      '{ "function": "each()", "description": "iterates over a set of matched elements" }]}';
          $("#jqtable").append("<tr>"+"<td>" + "Function" + "</td><td>" + "Description" +"</td></tr>");
    var c = true; var app = false; var fun = ""; var des = "";
    var objData = $.parseJSON(jsonData, function(key,val) {   
      if(isNaN(key) && !key.includes("jqueryfunctions")){
        if(c) { c=false; des = val; }
        else { c=true; app = true;}
        if(app) { $("#jqtable").append("<tr id=tr" + count + ">" + "<td>" + des + "</td><td>" + val +"</td></tr>"); app=false; count++; }
      }      
    });
    $("#jqtable").show();
  });
});

