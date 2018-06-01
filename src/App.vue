<template>
  <div>
    <div class="container">
      <app-header></app-header>

    <app-quote-maker></app-quote-maker>

    <app-ready-quote></app-ready-quote>

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
