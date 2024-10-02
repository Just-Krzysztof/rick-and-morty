import { Select } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";


interface Props {
  title: string;
  options: Genre[];
}

const CharacterSelector = ({ title, options }: Props) => {
  return (
    <>
      <Select placeholder={title}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default CharacterSelector;
