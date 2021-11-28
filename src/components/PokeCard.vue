<template>
  <v-card dark>
    <v-img
      height="300px"
      contain
      :src="require(`@/assets/${planet.image}`)"
    ></v-img>
    <v-card-title> {{ planet.name }} </v-card-title>
    <v-card-text> {{ planet.description.substring(0, 100) }}... </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ["planet"]
}
</script>