<template>
   <div>
     <p>Quotes Added</p>
     <div class="progress">
       <div class="progress-bar" role="progressbar"
            :style="{width: numberOfQuotes * 10 + '%'}">{{ numberOfQuotes }}/10 </div>
     </div>
   </div>
</template>

<script>

  export default {
    props: ['numberOfQuotes'],
  }
</script>

<style scoped>
  p {
    margin-top:20px;
    margin-bottom: 0;
    font-weight: bold;
  }
</style>
