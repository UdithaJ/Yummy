<template>
  <div>
  <HeaderCard/>
  <SearchFoods/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderCard from "@/components/HeaderCard";
import SearchFoods from "@/components/Search";

// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    SearchFoods,
    HeaderCard

  },
});
</script>
