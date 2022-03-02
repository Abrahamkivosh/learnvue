Vue.createApp({
  data() {
    return {
      message: "hello my app",
      firstName:"Abraham",
      lastName:"Kivondo",
      url:"https://github.com/Abrahamkivosh/learnvue",
      rawhtml:"<a href='https://github.com/Abrahamkivosh'>My github acc</a>"
    };
  },
  methods: {
      fullName(){
          return this.firstName.toUpperCase()+ " "  + this.lastName.toUpperCase()
      }
  },
}).mount('#app');

let na = "name"
