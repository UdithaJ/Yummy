<template>
  <v-row justify="space-around">
  <v-card
      width="100%"
      color="transparent"
  >

    <v-img
        :src="require('@/assets/images/cover.jpg')"
    >

      <v-card-title style="margin-top: 10px">
        <v-avatar  size="170" :tile="true">
          <img :src="require('@/assets/images/logo.png')" alt="logo">
        </v-avatar>
      </v-card-title>
    </v-img>
  </v-card>
  </v-row>
</template>

<script>
export default {
  name: "HeaderCard",
  components: {}
}
</script>

<style scoped>

</style>