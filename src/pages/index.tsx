import Image from "next/image";
import React, { useEffect, useState } from "react";
import MetaHead from "./components/MetaHead";
import Loader from "./loaders/Loader";
import { useRouter } from "next/router";

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
  const [loading, setLoading] = useState<boolean>(false); // State untuk menangani status loading
  const router = useRouter();

  useEffect(() => {
    fetchPokemon(currentLimit);
  }, [currentLimit]);

  const fetchPokemon = async (limit: number) => {
    try {
      // setLoading(true); // Mengatur status loading menjadi true ketika fetch dimulai
      // const response = await fetch(`https://pokemon.tipsngoding.com?limit=${limit}`);
      const response = await fetch(`http://localhost:5321?limit=${limit}`);
      const data: PokemonResponse = await response.json();

      setPokemon(data.data);
      setLoading(false); // Mengatur status loading menjadi false setelah fetch selesai
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setLoading(false); // Mengatur status loading menjadi false jika terjadi kesalahan
    }
  };

  const handleLoadMore = () => {
    setCurrentLimit((prevLimit) => prevLimit + 20);
  };

  const moveToDetailPage = (zukanId: string) => {
    router.push(`/${zukanId}`);
  };

  const splitPokemonTypes = (pokemonTypeId: any) => {
    return pokemonTypeId.split(",");
  };

  return (
    <>
      <MetaHead title="Home | Pokemon website" description="Pokémon list telah terbuka! Cek Pokémon favoritmu!" image="https://id.portal-pokemon.com/img/common/og-image.png" url="https://pokemon-list-tan.vercel.app" />
      <div className="page-header">
        <div className="page-leftheader">
          <h4 className="page-title mb-0 text-primary">List Pokemon</h4>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <Loader /> // Tampilkan pesan loading jika status loading adalah true
        ) : (
          pokemon.map((poke, index) => (
            <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
              <div
                key={index}
                className={getCardClassName(poke)}
                onClick={() => moveToDetailPage(poke.zukanId)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="">
                        <span className="fs-13 font-weight-normal">{poke.pokemonName}</span>
                        <h2 className="mb-2 number-font carn1 font-weight-bold">{poke.zukanId}</h2>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                      <div className="mx-auto text-right" style={{ position: "relative", width: "100px", height: "100px", right: "100px" }}>
                        <Image
                          src={poke.fileName}
                          alt={poke.pokemonName}
                          width={200}
                          height={200}
                          style={{
                            position: "absolute",
                            zIndex: 2,
                          }}
                        />
                        <Image
                          src="https://i.pinimg.com/originals/43/ed/d5/43edd5aa5f0de7f410f5e38326f4b94c.png"
                          alt="circle_pokemon"
                          width={100}
                          height={100}
                          style={{
                            position: "absolute",
                            zIndex: 1,
                            // animation: "spin 4s linear infinite",
                          }}
                        />
                        <Image
                          src="https://id.portal-pokemon.com//play/resources/pokedex/img/pokemon_bg.png"
                          alt="bg_pokemon"
                          width={100} // Ubah lebar menjadi lebih besar
                          height={100}
                          style={{
                            position: "absolute",
                            zIndex: 0,
                            animation: "spin 4s linear infinite",
                          }}
                        />
                      </div>
                      <div
                        className="card-body"
                        style={{
                          paddingLeft: 0,
                        }}
                      ></div>
                    </div>
                    <div className="btn-list d-flex">
                      {splitPokemonTypes(poke.pokemonTypeId).map((type: any, index: any) => (
                        <button type="button" className={`btn btn-svgs btn-svg-white me-1 ${getTypeButtonColor(type)}`} key={index} style={{}}>
                          <span className="btn-svg-text">{capitalizeFirstLetter(type)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={handleLoadMore}>
          Tampilkan Lebih Banyak
        </button>
      </div>
    </>
  );
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
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

function getTypeButtonColor(type: any) {
  switch (type) {
    case "grass":
      return "btn-green";
    case "poison":
      return "btn-cyan";
    case "fire":
      return "btn-red";
    case "water":
      return "btn-azure";
    case "ice":
      return "btn-blue";
    case "rock":
    case "ground":
      return "btn-gray";
    case "bug":
      return "btn-lime";
    case "flying":
      return "btn-vimeo";
    case "electric":
      return "btn-orange";
    case "dark":
    case "ghost":
      return "btn-dark";
    case "psychic":
      return "btn-yellow";
    case "fairy":
      return "btn-pink";
    case "steel":
      return "btn-primary";
    case "dragon":
      return "btn-secondary";
    case "fighting":
      return "btn-teal";
    default:
      return "btn-white"; // Default color
  }
}
// function convertToPascalCase(key: string): string {
//   return key.replace(/_([a-z])/g, (_, group1) => group1.toUpperCase());
// }
