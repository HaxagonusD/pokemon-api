import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/";
const getPokemon = async () => {
  return await axios.get(url).then(({ data: { results } }) => {
    return results;
  });
};

export default getPokemon;
