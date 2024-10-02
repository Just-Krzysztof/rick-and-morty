import { useState } from "react";
import CharacterGrid from "./components/CharacterGrid";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import CharacterSelector from "./components/CharacterSelector";
import genres from "./data/genres";
import { Genre } from "./hooks/useGenres";


export interface CharacterQuery {
  gender: Genre[];
  species: Genre[];
  status: Genre[];
}

function App() {
  const [characterQuery, setCharacterQuery] = useState<CharacterQuery>({
    gender: [],
    species: [],
    status: [],
  });

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
          <GridItem area="aside" position='fixed' top={3} left={0}>
            <CharacterSelector title="Select Gender" options={genres[0]?.genders || []} />
            <hr />
            <CharacterSelector title="Select Species" options={genres[1]?.species || []} />
            <hr />
            <CharacterSelector title="Select Status" options={genres[2]?.status || []} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <CharacterGrid characterQuery={characterQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
