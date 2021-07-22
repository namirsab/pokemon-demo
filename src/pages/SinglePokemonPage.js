import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//https://pokeapi.co/api/v2/pokemon/:id
export default function SinglePokemonPage() {
  const { pokemonId } = useParams();
  const [pokemon, isLoading, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    null
  );

  function renderPokemon() {
    if (isLoading || pokemon === null) {
      return "Loading...";
    }

    if (error) {
      return "There was an error fetching, try again";
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
