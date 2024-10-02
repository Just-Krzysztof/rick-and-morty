import { useState } from "react";
import CharacterGrid from "./components/CharacterGrid";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import CharacterSelector from "./components/CharacterSelector";

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
            <CharacterSelector></CharacterSelector>
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
