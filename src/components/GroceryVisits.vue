<template>
  <div class="hello">
    <ul v-for="visit in visits" :key="visit.id">
      <li>Store: {{ visit.store }} | Amount Spent: {{ visit.total | toCurrency }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IVisit } from '@/interfaces/IVisit.ts'
import axios from 'axios';

@Component
export default class GroceryVisits extends Vue {
private visits: IVisit[] = [];

mounted () {
  axios.get('data.json')
  .then((result) => {
    console.log(result)
    this.visits = result.data
  })
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
