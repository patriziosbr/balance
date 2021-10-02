var app = new Vue({
  el: "#root",
  data: {

    valueOne: 500,
    valueTwo: 500,
    maxValueOne: 1000,
    maxValueTwo: 1000,
    wave: "",
    waveArr: [],
    valueArr: [],
    maxIndexWave: ""
  },
  methods:{
    //balance scale on drag
    movingPlateOne() {
      this.valueTwo = this.maxValueTwo - this.valueOne;
    },
    movingPlateTwo() {
      this.valueOne = this.maxValueOne - this.valueTwo;
    },
    //balance scale on drag
    getInstantWeight() {
      if (this.valueOne >= this.maxValueOne ) {
        return;
      } 
      for (let index = 0; index < 30; index++) {
        this.valueOne = parseInt(this.valueOne) + 20;
        this.valueTwo = this.maxValueTwo - this.valueOne;
        //formula per sine wave
        this.wave = Math.sin(this.valueOne*Math.PI/180) * 2;
        this.wave += 100 - (this.wave-0) * 50;
        
        this.valueArr.push(this.valueOne);
          console.log(this.valueArr);
        this.waveArr.push(this.wave);
          console.log(this.waveArr);
        this.maxIndexWave = this.waveArr.indexOf(Math.max(...this.waveArr));
        //trovo indice massimo apice
          console.log(this.maxIndexWave);
        console.log(this.valueArr[this.maxIndexWave]);
        this.valueOne = this.valueArr[this.maxIndexWave];
      }
        setTimeout(()=>{
          for (let index = 0; index < this.maxIndexWave + 1; index++) {
            console.log('torna indietro', this.valueOne);
            this.valueOne -= 20;
          }
        },500)
   
      this.waveArr = [];
      this.valueArr = [];
    },
  }
}); //chiusura vue app







// //balance scale on drag
// $("#judge_range").on("input", function() {
//     $("#judge_rangeOutput").val(this.value + " gr");
//     $("#prejudges_range").val(1000 - this.value);
//     $("#preJudge_rangeOutput").val(1000 - this.value + " gr");
//     console.log(this.value);
//   });
//   $("#prejudges_range").on("input", function() {
//     $("#preJudge_rangeOutput").val(this.value + " gr");
//     $("#judge_range").val(1000 - this.value);
//     $("#judge_rangeOutput").val(1000 - this.value + " gr");
//     console.log('valore sotto', this.value);
//   });
//   //balance scale on drag

 
//     // hit the balance scale plate
//   $('#bntOne').click("on", function() {
//     var current_value = parseInt($('#judge_range').val());
//     var valueAtTop = current_value + 120;
//     var classname = $(this).attr("class");
//     if (classname === "low") {
//       if (current_value == 1000)
//         return;
//       else {
//         for (let index = 0; index < 6; index++) {
//           addValue();
//           var current_value = parseInt($('#judge_range').val());
//             s = Math.sin(current_value*Math.PI/180) * 2;
//             s += 100 - (s-0) * 50 ;
//             // parte 1 da salvare in json
//             console.log(current_value, "hit 2");
//             console.log(s);
//             //
//             if (current_value === valueAtTop){
//               //apice della curva
//               addValue();
//               console.log(current_value, 'torna indietro');
   
//               for (let index = 0; index < 6; index++) {
//                 $('#judge_range').val(current_value - 20);
//                 $("#judge_rangeOutput").val(current_value + " gr" );
//                 $("#prejudges_range").val(1000 - current_value);
//                 $("#preJudge_rangeOutput").val(1000 - current_value + " gr");
//                 var current_value = parseInt($('#judge_range').val());
//                 s = Math.sin(current_value*Math.PI/180) * 2;
//                 s += 100 - (s-0) * 50;
//                 // parte 1 da salvare in json
//                 console.log(current_value, "hit 2" );
//                 console.log(s);
//                 //
//               }
//             }
//         }
//       }
//     }
//   })
//   // hit the balance scale plate



    
// function addValue() {
//   var current_value = parseInt($('#judge_range').val());
//   $('#judge_range').val(current_value + 20);
//   $("#judge_rangeOutput").val(current_value + " gr" );
//   $("#prejudges_range").val(1000 - current_value);
//   $("#preJudge_rangeOutput").val(1000 - current_value + " gr");
// }


