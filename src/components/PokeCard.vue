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


import store from '@/store/index.js';


export default {
  props: ['urlPokemon'],


  computed : {
    pokemon() {
      return store.state.pokemon
    }
  },

  methods: {
    fetch() {
      //
    }
  },

  async created() {
    await store.dispatch("FechtPokemon", this.urlPokemon)
  }
}
</script>