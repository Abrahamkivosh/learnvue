Vue.createApp({
  data() {
    return {
      message: "hello my app",
      firstName:"Abraham",
      lastName:"Kivondo",
      url:"https://github.com/Abrahamkivosh/learnvue",
      rawhtml:"<a href='https://github.com/Abrahamkivosh'>My github acc</a>",
      lastNameLength:0
    };
  },
  methods: {
      fullName(){
          return this.firstName.toUpperCase()+ " "  + this.lastName.toUpperCase()
      },
      updateLastName(msg, event){
        event.preventDefault()
        console.log(msg)
        this.lastName = event.target.value
        this.lastNameLength =this.lastName.length
      }
  },
  created() {
    this.lastNameLength = this.lastName.length
  },
}).mount('#app');

let na = "name"
