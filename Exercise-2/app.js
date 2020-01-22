new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert: function () {
            alert('Some');
        },
        store: function (event) {
            this.value = event.target.value;
        }
    }
});