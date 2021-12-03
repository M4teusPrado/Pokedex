<template>
<v-app>
    <Navbar app />



    <v-navigation-drawer dark app color="grey darken-3" permanent absolute clipped style="height: 100%">


      <div>
        <v-list-item>
          <v-list-item-avatar color="grey lighten-2" size="64">
            <v-img src="./assets/brock.jpg"></v-img>

          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="font-weight: 500; font-size: 110%"
              >Brock</v-list-item-title
            >
            <v-list-item-subtitle>Mestre II</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />
      <v-list>
        <v-list-item-group >
          <v-list-item link @click="$router.push('/')" >
            <v-list-item-icon>
              <v-icon> mdi-home </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/fire')" >
            <v-list-item-icon>
              <v-icon> mdi-fire </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > Fire</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/water')" >
            <v-list-item-icon>
              <v-icon> mdi-water </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > Water</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/eletric')" >
            <v-list-item-icon>
              <v-icon> mdi-flash </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > Eletric </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>



    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>

 
    <Footer />

           


    <v-bottom-navigation app dark color="grey darken-3">
      <v-btn link @click="$router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn>

        <v-btn link @click="$router.push('/fire')">
        <v-icon>mdi-fire</v-icon>
      </v-btn>

      <v-btn link @click="$router.push('/water')">
        <v-icon>mdi-water</v-icon>
      </v-btn>

      <v-btn link @click="$router.push('/eletric')">
        <v-icon>mdi-flash</v-icon>
      </v-btn>
    </v-bottom-navigation>

    
   


</v-app>
</template>

<style scoped>
  .base {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default {

  name: 'App',
  components: { Navbar, Footer },

  data() {
    return {
      //
    } 
  },

  methods: {
    fetch() {
      console.log("Deu certo")
    }
  }

}
</script>
