<template>
  <v-content class="content-fire">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" class="col">
        <h1>Fire</h1>
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

<style scope > 

    .content-fire {
        background-color: brown;
        height: 100%;
    }

    .col {
        text-align: justify;
    }

</style >



<script>

import store from '@/store/index.js';
import PokeCard from "@/components/PokeCard.vue";

  export default {
    components: {
      PokeCard
    },
    
    computed: {
      pokedex() {
        return  store.state.pokedex.filter((pokemon) => pokemon.type === "fire")
      },
    },
  };



</script>