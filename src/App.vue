<template>
  <div>
    <div class= "container">
      <app-header :numberOfQuotes="listOfQuotes.length" :maxQuotes="maxQuotes"></app-header>

    <app-quote-maker :addQuote = "addQuote"></app-quote-maker>

    <app-ready-quote :listOfQuotes="listOfQuotes"></app-ready-quote>

      <div class="alert alert-info" role="alert">
        Info: click on a Quote to delete it
      </div>
    </div>
  </div>
</template>

<script>
  import ReadyQuote from './components/ReadyQuote.vue';
  import QuoteMaker from './components/QuoteMaker.vue';
  import Header from './components/Header.vue';

  export default {
    data: function() {
      return {
        listOfQuotes: [],
        maxQuotes: 10
      }
    },
    methods: {
      addQuote(quote) {
        if (this.listOfQuotes.length >= this.maxQuotes) {
          return alert('Please delete a Quote first!')
        }
        if (this.listOfQuotes.length < this.maxQuotes) {
          this.listOfQuotes.push(quote);
        }
      }
    },
    components: {
      'app-header': Header,
      'app-quote-maker': QuoteMaker,
      'app-ready-quote': ReadyQuote,
    }
  }
</script>

<style scoped>
  .alert {
    margin-top: 100px;
    text-align: center;
    color: #1618ff;
  }
</style>
