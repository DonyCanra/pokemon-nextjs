import { ActionTypes } from "./actionTypes";

// Action Creator Employee
export const pokemonFetchSuccess = (data: any) => {
  return {
    type: ActionTypes.POKEMON_FETCH_SUCCESS,
    payload: data,
  };
};

export const detailPokemonSuccess = (data: any) => {
  return {
    type: ActionTypes.POKEMON_FETCH_DETAIL_SUCCESS,
    payload: data,
  };
};
