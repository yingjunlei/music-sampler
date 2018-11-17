$(document).ready(function() {

// function to hide the container
 $("#container").hide();
  function hideAll() {
    $("#songname1").hide();
    $("#songname2").hide();
    $("#songname3").hide();
    $("#songname4").hide();
    $("#default").hide();
    $("#audio1").hide();
    $("#audio2").hide();
    $("#audio3").hide();
    $("#audio4").hide();
  }

  hideAll();

  $(".album").click(function() {

    hideAll();

    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });

//Switch function
    switch ($(this).attr("id")) {
      case "song1":
      $("#songname1").show();
      $("#audio1").show();
      break;
      case "song2":
      $("#songname2").show();
      $("#audio2").show();
      break;
      case "song3":
      $("#songname3").show();
      $("#audio3").show();
      break;
      case "song4":
      $("#songname4").show();
      $("#audio4").show();
      break;
    }
  });

//slide toggle to open the container
  $("#listen").click(function(){
    $("#container").slideToggle();
  });

});
