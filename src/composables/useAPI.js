import { ref } from "vue";
import axios from "axios";

const characters = ref();
const character = ref();

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
});

export const useAPI = () => {
  const getCharacters = async () => {
    const response = await api.get("1,2,3");
    characters.value = response.data;
  };

  const getCharacter = async (id) => {
    const response = await api.get("1,2,3/");
    character.value = response.data[0];
  };

  getCharacters();

  return {
    characters,
    character,
    getCharacters,
    getCharacter,
  };
};
