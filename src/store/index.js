import Vue from 'vue'
import Vuex from 'vuex'
import axios  from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokedex: [
      {
        name: "Charizard",
        image: "Charizard.png",
        type: "fire",
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

      {
        name: "Bulbasaur",
        image: "Bulbasaur.png",
        type: "Semente",
        description: "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente"

      },

      {
        name: "Ponyta",
        image: "Ponyta.png",
        type: "fire",
        description: "Ele não pode funcionar corretamente quando é recém-nascido. Conforme ele corre com outros de sua espécie, suas pernas ficam mais fortes."

      },

      {
        name: "Flareon",
        image: "Flareon.png",
        type: "fire",
        description: "Depois de armazenar calor suficiente, a temperatura corporal desse Pokémon pode chegar a 1.700 graus Fahrenheit."

      },

      {
        name: "Horsea",
        image: "Horsea.png",
        type: "water",
        description: "Horsea faz sua casa nos oceanos com correntes suaves. Se este Pokémon estiver sob ataque, ele cospe tinta preta como breu e escapa."

      },

      {
        name: "Dewgong",
        image: "Dewgong.png",
        type: "water",
        description: "Todo o seu corpo é branco como a neve. Sem se machucar nem mesmo com o frio intenso, ele nada com força em águas geladas."

      },


    ],

    pokemons:[]
  },

  mutations: {
    SET_POKEMON(state, payload) {
      console.log(payload)
      state.pokemons = payload

    }
  },

  actions: {
    FetchListadeUrls({commit}, type) {

      axios.get('https://pokeapi.co/api/v2/type/' + type + '?limit=1')
      .then(p => {
        const payLoad = p.data.pokemon
        const pokedex = []

        payLoad.forEach(p => {
          axios.get(p.pokemon.url)
          .then( pokemon => {
            pokedex.push(pokemon)
          })
        });

        commit('SET_POKEMON', pokedex)
      })
      .catch(err => console.log(err));
    }


  },
})