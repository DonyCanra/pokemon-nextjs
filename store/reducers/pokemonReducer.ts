import { ActionTypes } from "../actions/actionTypes";

interface PokemonState {
  pokemons: any[]; // Sesuaikan dengan tipe data yang sebenarnya
}

const initialState: PokemonState = { pokemons: [] };

function pokemonReducer(state: PokemonState = initialState, action: any): PokemonState {
  switch (action.type) {
    case ActionTypes.POKEMON_FETCH_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}

export default pokemonReducer;
