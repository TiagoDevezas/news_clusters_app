<template>
  <span class="date-picker">
    <Flatpickr :options="pickerOpts" v-model="defaultDate" />
  </span>
</template>

<script>
  export default {

    data () {
      return {
        defaultDate: this.$route.query.day ? this.$route.query.day : new Date().toISOString().slice(0, 10),
        pickerInstance: '',
        pickerOpts: {
          defaultDate: this.defaultDate,
          minDate: '2014-12-05',
          maxDate: new Date().toISOString().slice(0, 10),
          onReady: function (selectedDates, dateStr, instance) {
            this.pickerInstance = instance
          }.bind(this),
          onChange: function (selectedDates, dateStr, instance) {
            if (dateStr !== this.$route.query.day && dateStr.length) this.setRouteQuery(dateStr)
          }.bind(this),
          onClose: function (selectedDates, dateStr, instance) {
            if (!dateStr.length) {
              instance.setDate(this.$route.query.day)
            }
          }.bind(this),
          locale: {
            weekdays: {
              shorthand: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
              longhand: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
            },
            months: {
              shorthand: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
              longhand: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            },
            rangeSeparator: ' até '
          }
        }
      }
    },

    watch: {
      '$route.query.day': function (val, oldVal) {
        this.setDate(val)
      }
    },

    methods: {
      setDate (val) {
        this.pickerInstance.setDate(val)
      },
      doNothing (evt) {
        console.log(evt)
      },
      setRouteQuery (dateStr) {
        let weekParam = this.$route.query.week
        if (this.$route.query.q) {
          this.$router.push({ query: { day: dateStr, week: weekParam, q: this.$route.query.q } })
        } else {
          this.$router.push({ query: { day: dateStr, week: weekParam } })
        }
      }
    }
  }
</script>

<style scoped>
  .date-picker input {
    border: 0;
    border-bottom: 2px solid #5764c6;
    font-size: 1rem;
    color: #2c3e50;
    font-weight: 600;
    width: 6rem;
    display: inline-block;
    text-align: center;
  }
</style>
