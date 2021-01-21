import "./App.css";
import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";
import getPokemon from "./services/getPokemon";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    (async () => {
      setData(await getPokemon());
    })();
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((pokemon, index) => {
          return <Pokemon key={index} {...pokemon} />;
        })}
    </div>
  );
}

export default App;
