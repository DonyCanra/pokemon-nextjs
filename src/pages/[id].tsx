import { useEffect, useState } from "react";
import MetaHead from "./components/MetaHead";
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "./loaders/Loader";

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

export default function Detail() {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // State untuk menangani status loading
  const router = useRouter();

  const poke = pokemon[0];
  console.log(poke, "<");

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchPokemonDetail(id as string);
    }
  }, [id]);

  const fetchPokemonDetail = async (id: string) => {
    try {
      setLoading(true); // Mengatur status loading menjadi true ketika fetch dimulai
      // const response = await fetch(`https://pokemon.tipsngoding.com?limit=${limit}`);
      const response = await fetch(`http://localhost:5321/${id}`);

      console.log(response, "resp");

      const data: PokemonResponse = await response.json();

      setPokemon(data.data);
      setLoading(false); // Mengatur status loading menjadi false setelah fetch selesai
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setLoading(false); // Mengatur status loading menjadi false jika terjadi kesalahan
    }
  };
  return (
    <>
      <MetaHead title="Detail List - Pokemon website" description="Pokémon list telah terbuka! Cek Pokémon favoritmu!" image="https://id.portal-pokemon.com/img/common/og-image.png" url="https://pokemon-list-tan.vercel.app" />
      <div className="page-header">
        <div className="page-leftheader">
          <h4 className="page-title mb-0 text-primary">Pokemon {poke?.pokemonName}</h4>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <Loader /> // Tampilkan pesan loading jika status loading adalah true
        ) : (
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-xm-12"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div className={getCardClassName(poke)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-6">
                    <div className="">
                      {/* <span className="fs-13 font-weight-normal">{poke?.pokemonName}</span> */}
                      {/* <h2 className="mb-2 number-font carn1 font-weight-bold">{poke?.zukanId}</h2> */}
                      {/* <span className="">
                        <i className="fe fe-arrow-down-circle"></i>
                        15%<span className="ms-1 fs-11">Loss This Attack</span>
                      </span> */}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                    <div className="mx-auto text-right">
                      <div style={{ position: "relative" }}>
                        <Image src={poke?.fileName} alt={poke?.pokemonName} width={500} height={500} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function getCardClassName(poke: PokemonData) {
  console.log(poke, "poke");

  if (poke?.pokemonTypeId.includes("poison") || poke?.pokemonTypeId.includes("grass") || poke?.pokemonTypeId.includes("bug")) {
    return "card overflow-hidden dash1-card border-0 dash2";
  } else if (poke?.pokemonTypeId.includes("fire") || poke?.pokemonTypeId.includes("electric")) {
    return "card overflow-hidden dash1-card border-0 dash3";
  } else if (poke?.pokemonTypeId.includes("water") || poke?.pokemonTypeId.includes("ice")) {
    return "card overflow-hidden dash1-card border-0 dash4";
  } else if (poke?.pokemonTypeId.includes("dark")) {
    return "card overflow-hidden dash1-card border-0 dash1";
  } else if (poke?.pokemonTypeId.includes("rock") || poke?.pokemonTypeId.includes("ground")) {
    return "card overflow-hidden dash1-card border-0 bg-yellow";
  } else {
    return "card overflow-hidden dash1-card border-0 bg-white";
  }
}