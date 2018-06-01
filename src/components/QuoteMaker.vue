<template>
  <div class="component">
    <p>Quote</p>
    <div class="container">
      <div class="form">
        <label for="quoteGenerator">Quote</label>
        <textarea class="form-control" id="quoteGenerator" rows="5">
          {{ quote }}
        </textarea>
      </div>
    </div>
    <button>Add Quote</button>
  </div>
</template>

<script>
  export default {
    props: ['quote']
  }
</script>

<style>

</style>
