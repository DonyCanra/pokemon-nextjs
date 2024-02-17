import React, { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [currentLimit, setCurrentLimit] = useState(12);

  const fetchPokemon = async (limit: any) => {
    try {
      const response = await fetch(`http://localhost:5321?limit=${limit}`);
      const data = await response.json();
      setPokemon(data.data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching page:", currentLimit);
    fetchPokemon(currentLimit);
  }, [currentLimit]);

  const handleLoadMore = () => {
    setCurrentLimit(currentLimit + 20);
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
                      <span className="fs-14 font-weight-normal">{poke.pokemon_name}</span>
                      <h2 className="mb-2 number-font carn1 font-weight-bold">{poke.zukan_id}</h2>
                      <span className="">
                        <i className="fe fe-arrow-down-circle"></i>
                        15%<span className="ms-1 fs-11">Loss This Attack</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                    <div className="mx-auto text-right">
                      <img style={{ position: "relative" }} src={poke.file_name} alt={poke.pokemon_name} />
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

function getCardClassName(poke: any) {
  if (poke.pokemon_type_id.includes("poison") || poke.pokemon_type_id.includes("grass") || poke.pokemon_type_id.includes("bug")) {
    return "card overflow-hidden dash1-card border-0 dash2";
  } else if (poke.pokemon_type_id.includes("fire") || poke.pokemon_type_id.includes("electric")) {
    return "card overflow-hidden dash1-card border-0 dash3";
  } else if (poke.pokemon_type_id.includes("water") || poke.pokemon_type_id.includes("ice")) {
    return "card overflow-hidden dash1-card border-0 dash4";
  } else if (poke.pokemon_type_id.includes("grass")) {
    return "card overflow-hidden dash1-card border-0 dash1";
  } else {
    return "card overflow-hidden dash1-card border-0 dash5";
  }
}
