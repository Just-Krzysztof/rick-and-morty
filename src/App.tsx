import { useState } from "react";
import CharacterGrid from "./components/CharacterGrid";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import CharacterSelector from "./components/CharacterSelector";
import genres from "./data/genres";
import { Genre } from "./hooks/useGenres";


export interface CharacterQuery {
  gender: Genre[];
}

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg="coral">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <CharacterSelector title="Select Gender" options={genres[0]?.genders || []} />
            <CharacterSelector title="Select Species" options={genres[1]?.species || []} />
            <CharacterSelector title="Select Status" options={genres[2]?.status || []} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <CharacterGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
