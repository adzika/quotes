<template>
   <div>
     <p>Quotes Added</p>
     <div class="progress">
       <div class="progress-bar" role="progressbar"
            :style="{width: (numberOfQuotes/maxQuotes) * 100 + '%'}">
         {{ numberOfQuotes }} / {{ maxQuotes }} </div>
     </div>
   </div>
</template>

<script>

  export default {
    props: ['numberOfQuotes', 'maxQuotes'],
  }
</script>

<style scoped>
  p {
    margin-top:20px;
    margin-bottom: 0;
    font-weight: bold;
  }
</style>
