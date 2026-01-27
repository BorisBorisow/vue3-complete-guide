const app = Vue.createApp({
    data: function () {
        return {
            counter: 0,
            name: "",
            lastName: "",
            fullname: "",
        };
    },
    watch: {
        name(value) {
            if (value == '')
                this.fullname = '';
            else
                this.fullname = value + " " + this.lastName;
        },
        lastName(value) {
            if (value == '')
                this.fullname = '';
            else
                this.fullname = this.name + " " + value;
        }
    },
    computed: {
        fullname() {
            if (this.name != "") return this.name + " " + "Li";
            return "";
        },
    },
    methods: {
        outputFullname() {
            if (this.name != "") return this.name + " " + "Li";
            return "";
        },
        add(num) {
            this.counter += num;
        },
        minus(num) {
            this.counter -= num;
        },
        resetInput() {
            this.name = "";
        },
    },
});

app.mount("#events");