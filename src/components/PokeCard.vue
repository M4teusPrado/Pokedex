<template>
  <v-card dark>
    <v-img
      height="300px"
      contain
      :src="require(`@/assets/${pokemon.image}`)"
    ></v-img>
    <v-card-title> {{ pokemon.name }} </v-card-title>
    <v-card-text> {{ pokemon.description.substring(0, 100) }}... </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ["pokemon"]
}
</script>