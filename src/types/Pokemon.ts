export interface PokemonData {
  zukanId: string;
  zukanSubId: number;
  pokemonName: string;
  pokemonSubName: string;
  weight: number;
  height: number;
  fileName: string;
  pokemonTypeId: string;
  pokemonTypeName: string;
}

export interface PokemonResponse {
  status: boolean;
  error: string | null;
  data: PokemonData[];
  meta: {
    limit: string;
    page: string;
  };
}

export interface PokemonState {
    data: PokemonData[];
    loading: boolean;
    error: string | null;
  }