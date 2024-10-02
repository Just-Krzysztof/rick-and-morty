import React from "react";
import useCharacters from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import { SimpleGrid } from "@chakra-ui/react";

const CharacterGrid = () => {
  const { data, error, isLoading } = useCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xlg:4 }} spacing={10}>
      {data.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </SimpleGrid>
  );
};

export default CharacterGrid;
