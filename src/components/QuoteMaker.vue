<template>
  <div class="component">
    <div class="container">
      <div class="form">
        <label for="quoteGenerator">Quote</label>
        <textarea class="form-control" id="quoteGenerator" rows="5">
          {{ quote }}
        </textarea>
      </div>
    </div>
    <div>
      <button class="btn btn-primary">Add Quote</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quote']
  }
</script>

<style scoped>
 .btn {
   margin-left: auto;
   margin-right: auto;
   display: flex;
   margin-top: 20px;
   margin-bottom: 50px;
 }
</style>
