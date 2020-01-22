new Vue({
    el: '#exercise',
    data: {
        value: 0,
        seconds: 5
    },
    computed: {
        result () {
            return this.value < 37 ? 'not there yet' : 'done';
        }
    },
    watch: {
        result () {
            setTimeout(() => this.value = 0, this.seconds * 1000);
        }
    }
});