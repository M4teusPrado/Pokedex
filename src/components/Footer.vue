<template>

     <v-footer absolute app dark>
      <v-col class="text-center pa-0" cols="12">
        <strong>Pokdex © - Facens </strong>
         <v-btn @click="fetch()">FETCH SOMETHING {{pokedex}}</v-btn>
      </v-col>
    </v-footer>
    
</template>


<script>
  import axios  from 'axios'
export default {




  data() {
    return {
      pokedex: []
    }
  },
  methods: {
    fetch() {
      console.log("Deu certo")
      axios.get('https://pokeapi.co/api/v2/type/fire')
      .then(p => {
        this.pokedex = p.data.pokemon
      })
      .catch(err => console.log(err));
    }
  }
    
}
</script>