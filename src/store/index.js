import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokedex: [
      {
        name: "Charizard",
        image: "Charizard.png",
        type: "Fire",
        description: "Ele cospe fogo que é quente o suficiente para derreter pedras. Pode causar incêndios florestais ao soprar chamas."
        
      }, 

      {
        name: "Pikachu ",
        image: "Pikachu.png",
        type: "eletric",
        description: "O pikachu, que pode gerar eletricidade poderosa, tem bolsas nas bochechas que são extremamente macias e super elásticas."

      }, 

      {
        name: "Squirtle",
        image: "Squirtle.png",
        type: "water",
        description: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa."

      },

    ]
  },
})