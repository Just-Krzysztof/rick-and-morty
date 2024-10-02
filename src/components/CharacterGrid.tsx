import React from "react";
import useCharacters from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import { SimpleGrid, Button, Box, HStack } from "@chakra-ui/react";
import CharacterCardContainer from "./CharacterCardContainer";
import { CharacterQuery } from "../App";

interface Props {
  characterQuery: CharacterQuery;
}

const CharacterGrid = ({ characterQuery }: Props) => {
  const { data, info, error, nextPage, prevPage, page } = useCharacters({
    gender: `${characterQuery.gender }`,
    species: `${characterQuery.species}`,
    status: `${characterQuery.status}`,
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
      <Box my={4} display="flex" justifyContent="center">
        <HStack>
          <Button onClick={prevPage} disabled={page === 1}>
            Previous
          </Button>
          <Button onClick={nextPage} disabled={!info?.next}>
            Next
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default CharacterGrid;
