import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonData, PokemonState } from "@/types/Pokemon";

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    fetchPokemonStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonSuccess(state, action: PayloadAction<PokemonData[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPokemonFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } = pokemonSlice.actions;
export default pokemonSlice.reducer;
