// Vanilla JS
// document.getElementById('button').addEventListener()

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      const that = this;
      if (value > 50) {
        setTimeout(function () {
          that.counter = 0;
        }, 2000)
      }
    }
  },
  computed: {
    fullname() {
      console.log("Running again")
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      console.log("Running again")
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Borisov";
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    subbmitForm(event) {
      alert("Submitted!")
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },

    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
