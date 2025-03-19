import { combineReducers } from "redux";
import pokemonReducer from "./slices/pokemonSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
