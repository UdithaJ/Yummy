<template>
<HeaderCard/>
  <v-container>
<v-card>
  <v-card-title>{{meal.strMeal}}</v-card-title>
<v-row style="margin-bottom: 5px;">
    <v-img style="margin-left: 20px"
        :src="meal.strMealThumb"
        width="200px"
        dark
    >
    </v-img>

  <v-list class="column_wrapper"
      two-line
      subheader
  >
<!--    <v-card-subtitle>Ingredients</v-card-subtitle>-->

    <v-list-item
        v-for="ingredient in ingredients"
        :key="ingredient">
      <v-list-item-content>
        <v-list-item-title>{{ingredient.ingredient}}</v-list-item-title>
        <v-list-item-subtitle>{{ingredient.ingredientMeasure}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</v-row>
  <v-divider></v-divider>
  <v-container>
    {{meal.strInstructions}}
  </v-container>
  </v-card>
  </v-container>
</template>

<script>
import HeaderCard from "@/components/HeaderCard";
export default {
  name: "RecipeView",
  components: {HeaderCard},

  data(){
    return{
      ingredients: []
    }
  },
  computed:{
    meal(){
      return this.$store.meal;
    }
  },
  mounted() {
    let value = 1;
    for (const ingredient in this.meal) {
      console.log(ingredient);
      let ingredientKey = "strIngredient" + value;
      let measureKey = "strMeasure" + value;
      if (this.meal[ingredientKey] !== "" && this.meal[ingredientKey]){
        let ingredient = {
          ingredient: this.meal[ingredientKey],
          ingredientMeasure: this.meal[measureKey]
        }
        this.ingredients.push(ingredient);
      }
      value++;
    }
  }
}
</script>

<style scoped>
.column_wrapper {
  column-count: 4;
}
</style>