import { ActionTypes } from "../actions/actionTypes";

interface PokemonState {
  pokemon: any[]; // Sesuaikan dengan tipe data yang sebenarnya
}

const initialState: PokemonState = { pokemon: [] };

function detailPokemonReducer(state: PokemonState = initialState, action: any): PokemonState {
  switch (action.type) {
    case ActionTypes.POKEMON_FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
}

export default detailPokemonReducer;
