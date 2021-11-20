<template>
  <v-app>

   
    <v-system-bar app> system bar   </v-system-bar>
    <v-app-bar clipped-left app > app bar </v-app-bar>
    <v-navigation-drawer clipped  app> v-navegation-drawer </v-navigation-drawer>
    
    <v-main>
      <v-container fluid>
        v-content
      </v-container>
    </v-main>

    <v-footer app> 
        footer
    </v-footer>

    <v-bottom-navigation app> 
      v-bottom-navigation
    </v-bottom-navigation>

</v-app>
</template>


<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

