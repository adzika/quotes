<template>
  <div>
    <div class="card" v-for="text in listOfQuotes">
      <div class="card-body">
        <p class="card-text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteMaker from '../components/QuoteMaker'
  import { eventBus } from "../main";

  export default {
    data: function() {
      return {
        listOfQuotes: ["blabla", "blob"]
      }
    },
    components: {
      appQuoteMaker:QuoteMaker
    },
    created() {
      eventBus.$on('quoteReady', (quote) => {
        this.listOfQuotes.push(quote);
      });
    }
  }
</script>

<style scoped>
  div {
    display: flex;
  }
  .card {
    width: 18rem;
    min-height: 200px;
  }
</style>
