<template>
  <div class="component">
    <div class="container">
      <div class="form">
        <label for="quoteGenerator">Quote</label>
        <textarea class="form-control" id="quoteGenerator" rows="5" v-model="readyQuote">

        </textarea>
      </div>
    </div>
    <div>
      <button class="btn btn-primary" @click="writeQuote">Add Quote</button>
    </div>
  </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
    data: function() {
      return {
        readyQuote: ""
      }
    },
    methods: {
      writeQuote() {
        eventBus.quoteWritten(this.readyQuote);
      }
    },
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
