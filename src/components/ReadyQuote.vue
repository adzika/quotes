<template>
  <div class="noIdea">
    <div class="card" @click="deleteQuote(text)" v-for="text in listOfQuotes">
      <div class="card-body">
        <p class="card-text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['listOfQuotes'],
    methods: {
      deleteQuote(text) {
        let index = this.listOfQuotes.indexOf(text);
        if (index !== -1) {
          this.listOfQuotes.splice(index, 1);
        }
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
  }
  .card {
    width: 18rem;
    min-height: 50px;
    cursor: pointer
  }
  .card:hover {
    background-color: #ffe2e2;
  }
  .card-text {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e
  }
  .noIdea {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 5px;
  }
</style>
