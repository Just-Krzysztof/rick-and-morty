import { Box, Button, Heading, Select } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  title: string;
  options: Genre[];
}

const CharacterSelector = ({ title, options }: Props) => {
  return (
    <>
      <Box overflow='hidden' m={4}>
      <Heading fontSize="xl" mb={2}>
        {title}
      </Heading>
      <ul >
        {options.map((option) => (
          <li key={option.id} value={option.id}>
            <Button variant="link">
            {option.name}
            </Button>
          </li>
        ))}
      </ul>
      </Box>
    </>
  );
};

export default CharacterSelector;
