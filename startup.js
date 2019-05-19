$(document).ready(function() {
  $("p").text("");
  $("#jqtable").hide();
  $("h1").text("Hey Sexy!");
  $("h2").text("Good to see you!");
  $("#table").html("");
  $.ajaxSetup({ //required mime override for json, should be able svelte this
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });
});