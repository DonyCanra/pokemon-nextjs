import { pokemonFetchSuccess, detailPokemonSuccess } from "./actionCreator";

import { ThunkAction, thunk } from "redux-thunk";
import { RootState } from "..";
import axios from "axios";
import { Action } from "redux";

// URL SERVER

// Tipe aksi thunk
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export function fetchPokemon(limit: number): AppThunk {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5321?limit=${limit}`);

      const data = response.data;

      return dispatch(pokemonFetchSuccess(data));
    } catch (error: any) {
      const msgError = error.response.data.error.messageData;
      console.log(msgError);
    }
  };
}

export function fetchDetailPokemon(id: number): AppThunk {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5321/${id}`);

      const data = response.data;

      return dispatch(detailPokemonSuccess(data));
    } catch (error: any) {
      const msgError = error.response.data.error.messageData;
      console.log(msgError);
    }
  };
}

export default thunk;
