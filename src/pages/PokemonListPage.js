//https://pokeapi.co/api/v2/pokemon

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PokemonListPage() {
  const [data, isLoading, error] = useFetch(
    "https://pokeapi.co/api/v2/pokemon",
    {
      results: [],
    }
  );

  function renderPokemons() {
    if (isLoading) {
      return "Loading...";
    }

    if (error) {
      return "There was an error fetching, try again";
    }

    return data.results.map((pokemon, index) => {
      const id = index + 1;
      return (
        <li>
          <Link to={`/pokemon/${id}`}>{pokemon.name}</Link>
        </li>
      );
    });
  }

  return <ul>{renderPokemons()}</ul>;
}
