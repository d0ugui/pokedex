import axios from 'axios';
import { api } from './api';

export async function getPokemonInfos(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

export async function getPokemons(limit, offset) {
  try {
    const res = await api.get(`?limit=${limit}&offset=${offset}`);
    return res;
  } catch (error) {
    console.log('Error:', error);
  }
}

export async function getUniquePokemon(pokemon) {
  try {
    const { data } = await api.get(`/${pokemon}`);
    return data;
  } catch (error) {
    if (error.response.data === 'Not Found') {
      alert('O pokémon não existe!');
    }
  }
}
