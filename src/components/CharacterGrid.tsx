import React from "react";
import useCharacters from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import { SimpleGrid, Button, Box } from "@chakra-ui/react";
import CharacterCardContainer from "./CharacterCardContainer";

const CharacterGrid = () => {
  const { data, info, error, nextPage, prevPage, page } = useCharacters({
    name: "rick",
  });

  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {data.map((character) => (
          <CharacterCardContainer key={character.id}>
            <CharacterCard character={character} />
          </CharacterCardContainer>
        ))}
      </SimpleGrid>
      {JSON.stringify(info)}
      <Box mt={4} display="flex" justifyContent="center">
        <Button onClick={prevPage} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={nextPage} disabled={!info?.next}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterGrid;
