<template>
  <div class="home">
    <GroceryVisits/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GroceryVisits from '@/components/GroceryVisits.vue'; // @ is an alias to /src

@Component({
  components: {
    GroceryVisits,
  },
})
export default class Home extends Vue {}
</script>
