import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//https://pokeapi.co/api/v2/pokemon/:id
export default function SinglePokemonPage() {
  const { pokemonId } = useParams();
  const history = useHistory();

  const [pokemon, isLoading, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    null
  );

  console.log(history);

  function handleGoBackClick() {
    history.goBack();
  }

  function handleGoNextClick() {
    history.push(`/pokemon/${Number(pokemonId) + 1}`);
  }

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
        <button onClick={handleGoBackClick}>Go Back</button>
        <button onClick={handleGoNextClick}>Go Next</button>
      </section>
    );
  }

  return renderPokemon();
}
