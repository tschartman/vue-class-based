<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Items</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>

        <v-expansion-panel
        v-model="panel"
        expand
        >
          <v-expansion-panel-content
            v-for="item in items"
            :key="item.id"
          >
            <template v-slot:header>
              <div>{{ item.brand }} {{ item.name }} - {{ item.weight }} Oz</div>
            </template>

            <v-card>
              <v-card-text>x{{ item.quantity }} at {{ item.price | toCurrency }} each -  {{ (item.price * item.quantity) | toCurrency }}</v-card-text>
              <v-card-text>({{ item.price / item.weight | toCurrency }} per Oz)</v-card-text>    
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card>
    </v-flex>
 </v-layout>
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