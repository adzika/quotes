<template>
  <div>
    <div class= "container">
      <app-header :numberOfQuotes="listOfQuotes.length"></app-header>

    <app-quote-maker :addQuote = "addQuote"></app-quote-maker>

    <app-ready-quote :listOfQuotes="listOfQuotes"></app-ready-quote>

        <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import ReadyQuote from './components/ReadyQuote.vue';
  import QuoteMaker from './components/QuoteMaker.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue'

  export default {
    data: function() {
      return {
        listOfQuotes: []
      }
    },
    methods: {
      addQuote(quote) {
        if (this.listOfQuotes.length < 10) {
          this.listOfQuotes.push(quote);
        }
      }
    },
    components: {
      'app-header': Header,
      'app-quote-maker': QuoteMaker,
      'app-ready-quote': ReadyQuote,
      'app-footer': Footer

    }
  }
</script>

<style>
</style>
