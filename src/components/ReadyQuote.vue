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
  export default {
    props: ['listOfQuotes'],
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
