import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//https://pokeapi.co/api/v2/pokemon/:id
export default function SinglePokemonPage() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, [pokemonId]);

  function renderPokemon() {
    if (isLoading || pokemon === null) {
      return "Loading...";
    }

    const { name, sprites } = pokemon;

    return (
      <section>
        <h2>{name}</h2>
        <img
          src={sprites?.other["official-artwork"]?.front_default}
          alt={`${name}`}
        />
      </section>
    );
  }

  return renderPokemon();
}
