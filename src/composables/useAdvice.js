import { ref } from "vue";
import axios from "axios";

const advices = ref([]);

const api = axios.create({
  baseURL: "https://api.adviceslip.com/advice",
});

const getRandomAdvice = async () => {
  const response = await api.get();
  if (response.status === 200) {
    advices.value = [response.data.slip];
  }
};
export const useAdvice = () => {
  getRandomAdvice();
  const search = async (searchItem) => {
    const response = await api.get(`search/${searchItem}`);

    if (response.status === 200) {
      advices.value = response.data.slips;
    }
  };
  return { advices, search };
};
