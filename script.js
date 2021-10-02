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
        //get sine wave
        this.wave = Math.sin(this.valueOne*Math.PI/180) * 2;
        this.wave += 100 - (this.wave-0) * 50;
        
        this.valueArr.push(this.valueOne);
        // console.log(this.valueArr);

        this.waveArr.push(this.wave);
        // console.log(this.waveArr);
        //top sine vawe
        this.maxIndexWave = this.waveArr.indexOf(Math.max(...this.waveArr));
        this.valueOne = this.valueArr[this.maxIndexWave];
      }
      // clean valueArr
      var cleanValueArr = this.valueArr.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })
      // save json valueArr
      var valueJsonArr = {...cleanValueArr};
      console.log(valueJsonArr);
      
      // clean waveArr
      var cleanWaveArr = this.waveArr.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })
      // save json valueArr
      var waveJsonArr = {...cleanWaveArr};
      console.log(waveJsonArr);

      // 
        setTimeout(()=>{
          for (let index = 0; index < this.maxIndexWave + 1; index++) {
            this.valueOne -= 20;
            this.valueTwo = this.maxValueTwo - this.valueOne;
          }
        },500)

      this.waveArr = [];
      this.valueArr = [];
    },
  }
}); //chiusura vue app