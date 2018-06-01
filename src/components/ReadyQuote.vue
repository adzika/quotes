<template>
  <div class="container">
    <div class="form">
      <label for="quoteGenerator">Quote</label>
      <textarea class="form-control" id="quoteGenerator" rows="5">

        </textarea>
    </div>
  </div>
</template>

<script>
  import QuoteMaker from '../components/QuoteMaker'

  export default {
    components: {
      appQuoteMaker:QuoteMaker
    }
  }
</script>

<style>

</style>
