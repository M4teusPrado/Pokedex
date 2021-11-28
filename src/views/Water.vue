<template>
  <v-content style="background-color: #303030; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
        <h1>Water</h1>
        <v-divider class="background-color: white mb-3"></v-divider>
        <v-row>
           <v-col v-for="(pokemon, p) in pokedex" :key="p" cols="3">
              <PokeCard :pokemon="pokemon" />
           </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>

import store from '@/store/index.js';
import PokeCard from "@/components/PokeCard.vue";

  export default {
    components: {
      PokeCard
    },
    
    computed: {
      pokedex() {
        return  store.state.pokedex.filter((pokemon) => pokemon.type === "water")
      },
    },
  };



</script>