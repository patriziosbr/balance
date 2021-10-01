//balance scale on drag
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
  //balance scale on drag


  // hit the balance scale plate
  $('#bntOne').click("on", function(e) {
    e.preventDefault();
    var current_value = parseInt($('#judge_range').val());
    var classname = $(this).attr("class");
    console.log(current_value);
    if (classname === "low") {
      if (current_value == 1000)
        return;
      else {
        for (let index = 0; index < current_value; index++) {
          $('#judge_range').val(current_value + 20);
          $("#judge_rangeOutput").val(current_value + " gr" );
          $("#prejudges_range").val(1000 - current_value);
          $("#preJudge_rangeOutput").val(1000 - current_value + " gr");
            var current_value = parseInt($('#judge_range').val());
            s = Math.sin(current_value*Math.PI/180) * 2;
            s += 100 - (s-0) * 50 ;
            console.log(current_value, "hit 2" );
            console.log(s);
            if (current_value == 640 ){
              //apice della curva
              index = current_value;
              console.log('torna indietro');
              while(current_value >= 500) {
                $('#judge_range').val(current_value - 20);
                $("#judge_rangeOutput").val(current_value + " gr" );
                $("#prejudges_range").val(1000 - current_value);
                $("#preJudge_rangeOutput").val(1000 - current_value + " gr");
                  var current_value = parseInt($('#judge_range').val());
                  s = Math.sin(current_value*Math.PI/180) * 2;
                  s += 100 - (s-0) * 50 ;
                  console.log(current_value, "hit 2" );
                  console.log(s);
                  if (current_value == 480) {
                    return current_value = 500;
                  }
              }
            }
        }
      }
    }
  })
  // hit the balance scale plate




