<template>
  <v-card dark >

    <v-img
      height="350px" contain :src="pokemon.sprites.front_default"
    ></v-img>
    <v-card-title> 
      {{ pokemon.name }} 
    </v-card-title>
    <v-card-text>  
      <!-- Skills: {{pokemon.moves.map(item => ' ' + item.move.name).toString()}} -->
    </v-card-text>
  </v-card>
</template>

<script>


export default {
  props: ['pokemon'],


}
</script>