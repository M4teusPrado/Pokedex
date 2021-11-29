<template>
  <v-card dark >
    <v-img
      height="350px" contain :src="require(`@/assets/${pokemon.image}`)"
    ></v-img>
    <v-card-title> 
      {{ pokemon.name }} 
    </v-card-title>
    <v-card-text>  
      {{ pokemon.description }}.. 
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ["pokemon"]
}
</script>