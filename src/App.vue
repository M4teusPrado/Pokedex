<template>
  <v-app>
    <v-system-bar  height="20" class="base" app> system bar   </v-system-bar>
    <v-app-bar clipped-left class="base" app> app bar </v-app-bar>
    <v-navigation-drawer clipped permanent  style="padding: 18% 0% 0%;" class="base" app> v-navegation-drawer </v-navigation-drawer>
    <v-container fluid style="height: 100%" class="base" app> v-content</v-container>
    <v-footer class="base" app> footer </v-footer>
    <v-bottom-navigation  class="base" app>  v-bottom-navigation </v-bottom-navigation>
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