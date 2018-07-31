var form = new Vue({
    el: '#form',
    data: {
      name: '',
      number: '',
      attemptSubmit: false,
    },
    computed: {
      missingName: function () { return this.name === ''; },
      wrongNumber: function () {
        return (
          this.isNumeric(this.number) === false ||
          this.number < 1 ||
          this.number > 24
        )
      },
    },
    methods: {
      isNumeric: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      },
      
      validateForm: function (event) {
        this.attemptSubmit = true;
        if (this.missingName || this.wrongNumber) event.preventDefault();
      },
    },
  });
  