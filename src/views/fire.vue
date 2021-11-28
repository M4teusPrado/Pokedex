<template>
  <v-content style="background-color: #303030; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
        <h1>Fire</h1>
        <v-divider class="background-color: white mb-3"></v-divider>

        <v-row>
         
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>

  


  export default {
    components: {
     
    },
    
    computed: {
      pokedex() {
        return this.$store.state.pokedex;
      },
    },
  };
</script>