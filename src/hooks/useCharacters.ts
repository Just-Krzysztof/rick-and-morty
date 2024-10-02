import useData from "./useData";

export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
}

const useCharacters = () => {
  return useData<Character>("/character");
};

export default useCharacters;
