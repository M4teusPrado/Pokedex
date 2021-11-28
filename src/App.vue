<template>
<v-app>
    <Navbar app />

    <v-navigation-drawer dark app permanent absolute clipped style="height: 100%">

      <div>
        <v-list-item>
          <v-list-item-avatar color="grey lighten-2" size="64">
            <v-img src="./assets/brock.jpg"></v-img>

          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="font-weight: 500; font-size: 110%"
              >Brock</v-list-item-title
            >
            <v-list-item-subtitle>brock@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider />

      <v-list>
        <v-list-item-group v-model="selectedNavbarItem">
          <v-list-item v-for="item in links" :key="item.title" link @click="$router.push(item.url)" >

            
            <v-list-item-icon>
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

     <v-main class="pa-0">
      <router-view></router-view>
    </v-main>

    <Footer />


    <v-bottom-navigation app dark v-model="selectedBottombarItem">
      <v-btn v-for="(item, i) in links" :key="i" @click="$router.push(item.url)">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
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
      links: 
      [
        {
          title: "Home",
          icon: "mdi-home",
          url: "/",
        },
        {
          title: "Fire",
          icon: "mdi-fire",
          url: "/fire",
        },
        {
          title: "Water",
          icon: "mdi-water",
          url: "/water",
        },
        {
          title: "Eletric",
          icon: "mdi-flash",
          url: "/eletric",
        }
      ]
    } 
  }
}
</script>
