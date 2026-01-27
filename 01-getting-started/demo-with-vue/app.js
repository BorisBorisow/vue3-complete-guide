const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learne Vue!",
            courseGoalB: "Master Vue and build amazing apps!",
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            return randomNum > 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
})

app.mount('#user-goal')