import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export async function searchPokemon(pokemon) {
  try {
    const res = await api.get(`/${pokemon}`);
    return await res.json();
  } catch (error) {
    console.log('error', error);
  }
}
