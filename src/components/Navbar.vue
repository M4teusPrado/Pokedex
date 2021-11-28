<template>
    <div>

        <v-system-bar dark color="primary"  app >
            <v-spacer></v-spacer>
            <v-icon>mdi-wifi-strength-4</v-icon>
            <v-icon>mdi-signal-cellular-outline</v-icon>
            <v-icon>mdi-battery</v-icon>
            <span>12:30</span>

        </v-system-bar>

        <v-app-bar dark app absolute clipped-left elevation="0">
            <v-icon left>mdi-ufo-outline</v-icon>
            <v-toolbar-title>Pokedex</v-toolbar-title>

           <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

    </div>
</template>


<script>
export default {
    
}
</script>