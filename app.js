Vue.createApp({
  data() {
    return {
      message: "hello my app",
      firstName:"Abraham",
      lastName:"Kivondo",
      url:"https://github.com/Abrahamkivosh/learnvue",
      rawhtml:"<a href='https://github.com/Abrahamkivosh'>My github acc</a>",
      lastNameLength:0,
      age:0,
      num1:0,
      num2:0,
      total:0
    };
  },
  methods: {
      
      updateLastName(msg, event){
        // event.preventDefault()
        console.log(msg)
        this.lastName = event.target.value
        this.lastNameLength =this.lastName.length
      },
      submitform(msg, event){
        if (event) {
          alert(msg)
        }
      },
      calculate(){
        this.total = this.num1 + this.num2
      }
  },
  created() {
    this.lastNameLength = this.lastName.length
  },
  computed: {
    fullName(){
      return this.firstName.toUpperCase()+ " "  + this.lastName.toUpperCase()
  },
  },
}).mount('#app');

const vm = Vue.createApp({
  data() {
    return {
      firstName:"",
      lastName:"",
      name:""
    }
  },

  computed: {
    fullName:{
      get(){
        return this.firstName + " "+ this.lastName ;
      },
      set(newValue){
        // Use destructuring 
        [this.firstName, this.lastName] = newValue.split(" ")
      }
    }
  },

  methods: {
    submitForm(){
      return this.fullName = this.name
    }
  },


}).mount('#app1')
