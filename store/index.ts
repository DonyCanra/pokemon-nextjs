import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "../store/actions/thunks";
import pokemonReducer from "./reducers/pokemonReducer";
import detailPokemonReducer from "./reducers/detailPokemonReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// Definisikan tipe RootState
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  poke: detailPokemonReducer,
});

// Middleware logger
const logger = (store: any) => (next: any) => (action: any) => {
  // console.log("dispatching", action);
  let result = next(action);
  // console.log("next state", store.getState());
  return result;
};

// Buat store dengan middleware thunk dan logger
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
