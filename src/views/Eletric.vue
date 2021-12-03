<template>
  <v-main class="main-eletric">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" class="col">
        <h1>Eletric</h1>
        <v-divider class="background-color: white mb-3"></v-divider>
        <v-row>
           <v-col v-for="(p, u) in this.listadeUrls" :key="u" cols="3">
            <PokeCard :urlPokemon= "p.pokemon.url" />

      

           </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<style scope > 

    .main-eletric {
        background-color:   #E65100;
        height: 100%;
    }

    .col {
        text-align: justify;
    }

</style>


<script>


import PokeCard from "@/components/PokeCard.vue";
// import axios  from 'axios'
import store from '@/store/index.js';

  export default {
    components: {
      PokeCard
    },

    computed : {
      listadeUrls() {
        return store.state.listadeUrls
      }
    },


    data() {
      return {
        aux: [],
        pokedex: []
      }
    },
    methods: {
      fetch() {
       console.log("Deu certo!")
      }
    },

    async created() {
      await store.dispatch("FetchListadeUrls")
    },

    // list() {
    //   console.log(listadeUrls)
    // }


  };

</script>