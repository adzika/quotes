<template>
   <div>
     <p>Quotes Added</p>
     <div class="progress">
       <div class="progress-bar" role="progressbar"
            :style="{width: numberOfQuotes * 10 + '%'}">{{ numberOfQuotes }}</div>
     </div>
   </div>
</template>

<script>

  export default {
    props: ['numberOfQuotes'],
  }
</script>
