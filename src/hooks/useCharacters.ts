import useData from "./useData";

export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
}

interface FilterOptions {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
}

const useCharacters = (filters: FilterOptions = {}) => {
  const query = new URLSearchParams(
    Object.entries(filters).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();
  const url = `/character${query ? `?${query}` : ""}`;
  return useData<Character>(url);
};

export default useCharacters;
