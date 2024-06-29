//prc+tab

import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

// import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons/interfaces";



// Function to get the pokemons from the API
const getPokemons = async (
  limit = 20,
  offset = 0 // offset is the number of items to skip before starting to collect the result set
): Promise<SimplePokemon[]> => {
  // Promise is a built-in object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  const data: PokemonsReponse = await fetch(
    //Performs an HTTP GET request to the specified URL and waits for the response.
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json()); //Transforms the response to JSON format

  const pokemons = data.results.map((pokemon) => ({
    //Store the JSON response in the pokemons variable
    id: pokemon.url.split("/").at(-2)!, // split the url by '/' and get the antepenultimate element
    name: pokemon.name,
  }));

  // throw new Error("Error getting pokemons");

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon List <small>static</small>{" "}
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
