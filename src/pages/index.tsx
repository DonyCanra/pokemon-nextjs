import React, { useEffect, useState } from "react";

interface PokemonData {
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

interface PokemonResponse {
  status: boolean;
  error: any;
  data: PokemonData[];
  meta: {
    limit: string;
    page: string;
  };
}

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  const [currentLimit, setCurrentLimit] = useState<number>(12);

  useEffect(() => {
    fetchPokemon(currentLimit);
  }, [currentLimit]);

  const fetchPokemon = async (limit: number) => {
    try {
      const response = await fetch(`https://pokemon.tipsngoding.com?limit=${limit}`);
      const data: PokemonResponse = await response.json();
      const updatedData = data.data.map((item: PokemonData) => {
        const updatedItem: any = {}; // Gunakan Partial<PokemonData> di sini
        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            const typedKey = key as keyof PokemonData;
            updatedItem[convertToPascalCase(typedKey)] = item[typedKey];
          }
        }
        return updatedItem as PokemonData;
      });
      setPokemon(updatedData);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  const handleLoadMore = () => {
    setCurrentLimit((prevLimit) => prevLimit + 20);
  };

  return (
    <>
      <div className="page-header">
        <div className="page-leftheader">
          <h4 className="page-title mb-0 text-primary">List Pokemon</h4>
        </div>
      </div>

      <div className="row">
        {pokemon.map((poke, index) => (
          <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div key={index} className={getCardClassName(poke)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-6">
                    <div className="">
                      <span className="fs-14 font-weight-normal">{poke.pokemonName}</span>
                      <h2 className="mb-2 number-font carn1 font-weight-bold">{poke.zukanId}</h2>
                      <span className="">
                        <i className="fe fe-arrow-down-circle"></i>
                        15%<span className="ms-1 fs-11">Loss This Attack</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                    <div className="mx-auto text-right">
                      <img style={{ position: "relative" }} src={poke.fileName} alt={poke.pokemonName} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={handleLoadMore}>
          Tampilkan Lebih Banyak
        </button>
      </div>
    </>
  );
}

function getCardClassName(poke: PokemonData) {
  if (poke.pokemonTypeId.includes("poison") || poke.pokemonTypeId.includes("grass") || poke.pokemonTypeId.includes("bug")) {
    return "card overflow-hidden dash1-card border-0 dash2";
  } else if (poke.pokemonTypeId.includes("fire") || poke.pokemonTypeId.includes("electric")) {
    return "card overflow-hidden dash1-card border-0 dash3";
  } else if (poke.pokemonTypeId.includes("water") || poke.pokemonTypeId.includes("ice")) {
    return "card overflow-hidden dash1-card border-0 dash4";
  } else if (poke.pokemonTypeId.includes("dark")) {
    return "card overflow-hidden dash1-card border-0 dash1";
  } else if (poke.pokemonTypeId.includes("rock") || poke.pokemonTypeId.includes("ground")) {
    return "card overflow-hidden dash1-card border-0 bg-yellow";
  } else {
    return "card overflow-hidden dash1-card border-0 bg-white";
  }
}

function convertToPascalCase(key: string): string {
  return key.replace(/_([a-z])/g, (_, group1) => group1.toUpperCase());
}
