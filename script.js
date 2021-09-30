$("#judge_range").on("input", function() {
    $("#judge_rangeOutput").val(this.value + " gr");
    $("#prejudges_range").val(1000 - this.value);
    $("#preJudge_rangeOutput").val(1000 - this.value + " gr");
    console.log(this.value);
  });
  $("#prejudges_range").on("input", function() {
    $("#preJudge_rangeOutput").val(this.value + " gr");
    $("#judge_range").val(1000 - this.value);
    $("#judge_rangeOutput").val(1000 - this.value + " gr");
    console.log('valore sotto', this.value);
  });

  $('#bntOne').click("on", function(e) {
    e.preventDefault();
    var current_value = parseInt($('#judge_range').val());
    var classname = $(this).attr("class");
    console.log(current_value);
    if (classname === "low") {
      if (current_value == 1000)
        return;
      else {
        $('input').val(current_value + 10);
        $("#judge_rangeOutput").val(current_value + " gr");
        $("#prejudges_range").val(1000 - current_value);
        $("#preJudge_rangeOutput").val(1000 - current_value + " gr");
      }
  
    }
    
  })