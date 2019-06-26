<template>
  <div class="hello">
   <div v-for="item in items" v-bind:key="item.id">
       <div>{{ item.name }}</div>
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IItem } from '@/interfaces/Item.ts'
import axios from 'axios';

@Component
export default class GroceryDetail extends Vue {
private items: IItem[] = []
private id: number = 0;

mounted() {
this.id = parseInt(this.$route.params.visitId)

axios.get('/detail.json')
 .then((result) => {
    this.items = result.data
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