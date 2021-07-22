import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import PokemonListPage from "./pages/PokemonListPage";
import SinglePokemonPage from "./pages/SinglePokemonPage";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <Switch>
          <Route path="/pokemon/:pokemonId">
            <SinglePokemonPage />
          </Route>
          <Route path="/pokemon">
            <PokemonListPage />
          </Route>
          <Route path="/">
            <Redirect to="/pokemon" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
