<template>
  <v-card class="flexcard">
    <v-toolbar
        color="transparent"
        dark
    >
      <v-toolbar-title>Find meals around the world
        <v-icon
            color="amber">
          mdi-food
        </v-icon>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
          v-model="searchKey"
          label="Search any food"
          placeholder="Search any food"
          prepend-icon="mdi-magnify"
          @input="this.debounceSearch"
          class="text-right"
          solo
          rounded
          dense
      ></v-text-field>
    </v-toolbar>
  </v-card>
  <v-container v-if="searchKey === ''">
    <v-card
        color="transparent"
    height="400px">


      <v-img
          :src="require('@/assets/images/default.png')"
      >
      </v-img>
    </v-card>
  </v-container>
  <v-container>
    <v-row v-if="foods.length !== 0"
           no-gutters
    >
      <v-col
          min-width="100%"
          min-height="100%"
          style="margin-top: 10px; margin-right: 15px"
          v-for="meal in foods"
          :key="meal.idMeal"
      >
        <!--            <v-card-->
        <!--                class="mx-auto"-->
        <!--                width="344"-->
        <!--                height="400"-->
        <!--                style="margin-bottom: 10px"-->
        <!--                color="#3A3B3C"-->
        <!--            >-->
        <!--              <v-img-->
        <!--                  :src="meal.strMealThumb"-->
        <!--                  width="344px"-->
        <!--              >-->
        <!--              </v-img>-->

        <!--              <v-card-title>-->
        <!--                {{ meal.strMeal }}-->
        <!--              </v-card-title>-->


        <!--            </v-card>-->

        <v-card
            @click="showRecipe(meal)"
            color="#1B2631">
          <v-img
              :src="meal.strMealThumb"
              aspect-ratio="1"
              class="grey lighten-2"
              width="374px"
              min-width="100%"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title>
            {{ meal.strMeal }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import debounce from "lodash/debounce";
import router from "@/router";


export default {
  name: "SearchFoods",
  data() {
    return {
      foods: [],
      favourites: [],
      searchKey: '',
      dialog: true,
    }
  },
  methods: {
    getFoods() {
      if (this.searchKey !== '' || this.searchKey === null) {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.searchKey).then(response => {
          this.foods = response.data.meals

        })
      }
      else {
        this.foods = [];
      }
    },
    getLatestFoods() {
      this.searchKey = "chicken"
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.searchKey).then(response => {
        this.foods = response.data.meals
        console.log(this.foods)
      })
    },
    debounceSearch: debounce(function () {
      this.getFoods();
    }, 500),
    showRecipe(meal){
      this.$store.meal = meal;
      router.push({name: 'recipe'});
    }
  },
  mounted() {
    // this.getLatestFoods();
  }
}
</script>

<style scoped>
</style>