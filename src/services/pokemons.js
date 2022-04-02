import { api } from './api';

export async function getUniquePokemon(pokemon) {
  try {
    const res = await api.get(`/${pokemon.toLowerCase()}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    alert('O pokémon não existe!');
  }
}

export async function getPokemons(limit, offset) {
  try {
    const { data } = await api.get(`?limit=${limit}&offset=${offset}`);
    const { count } = data;

    const promises = await data.results.map(async (pokemon) => (
      getUniquePokemon(pokemon.name)
    ));

    const res = await Promise.all(promises);

    return { res, count };
  } catch (error) {
    console.log('Error:', error);
  }
}

export async function getFavoritePokemons(data) {
  try {
    console.log(data);
    const promises = await data.map(async (pokemon) => (
      getUniquePokemon(pokemon)
    ));

    const res = await Promise.all(promises);

    return res;
  } catch (error) {
    console.log('Error:', error);
  }
}
