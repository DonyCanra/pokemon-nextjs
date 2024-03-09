import { combineReducers } from 'redux';
import pokemonReducer from '../reducers/pokemonSlice';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  // Tambahkan reducers lain jika diperlukan
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
