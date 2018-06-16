<template>
   <div>
     <p>Quotes Added</p>
     <div class="progress">
       <div class="progress-bar" role="progressbar"
            :style="{width: numberOfQuotes}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ numberOfQuotes }}</div>
     </div>
   </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
    data: function () {
      return {
        numberOfQuotes: 0
      }
    },
    created() {
        eventBus.$on('quoteReady', (quote) => {
          this.numberOfQuotes++;
        });
    }
  }
</script>
