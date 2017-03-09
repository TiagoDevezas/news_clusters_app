<template>
  <span class="date-picker">
    <Flatpickr :options="pickerOpts" />
  </span>
</template>

<script type="text/javascript">
  export default {

    data () {
      return {
        pickerOpts: {
          defaultDate: this.$route.query.day ? this.$route.query.day : new Date().toISOString().slice(0, 10),
          minDate: '2014-12-05',
          maxDate: new Date().toISOString().slice(0, 10),
          onChange: function (selectedDates, dateStr, instance) {
            if (dateStr !== this.$route.query.day) this.setRouteQuery(dateStr)
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

    methods: {
      setRouteQuery (dateStr) {
        this.$router.push({ query: { day: dateStr } })
      }
    }
  }
</script>

<style scoped>
  .date-picker input {
    border: 0;
    border-bottom: 2px solid #5764c6;
    font-size: 2rem;
    color: #2c3e50;
    font-weight: 600;
    width: 12rem;
    display: inline-block;
    text-align: center;
  }
</style>
