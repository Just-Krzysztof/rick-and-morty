import { Box, Button, Heading, List, ListItem, Select } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  title: string;
  options: Genre[];
  onSelectOption: (option: Genre) => void;
  selectedOption: string;
}

const CharacterSelector = ({ title, options, onSelectOption, selectedOption }: Props) => {
  return (
    <>
      <Box overflow="hidden" m={4}>
        <Heading fontSize="xl" mb={2}>
          {title}
        </Heading>
        <List spacing={2}>
          {options.map((option) => (
            <ListItem key={option.id}>
              <Button variant="link" onClick={() => onSelectOption(option)} isActive={option.name === selectedOption}>
                {option.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default CharacterSelector;
