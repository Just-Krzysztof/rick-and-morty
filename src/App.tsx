import { useState } from "react";
import CharacterGrid from "./components/CharacterGrid";
import { Box, Button, Grid, GridItem, Show } from "@chakra-ui/react";
import CharacterSelector from "./components/CharacterSelector";
import genres from "./data/genres";
import { Genre } from "./hooks/useGenres";
import NavBar from "./components/NavBar";

// export interface CharacterQuery {
//   gender: Genre[];
//   species: Genre[];
//   status: Genre[];
// }
export interface CharacterQuery {
  gender: string;
  species: string;
  status: string;
}
function App() {
  const [characterQuery, setCharacterQuery] = useState({
    gender: "",
    species: "",
    status: "",
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
        <GridItem area="nav" display={'flex'} paddingX={10} justifyContent={{sm:'center',lg:'end'}}>
          <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" position="relative" zIndex={1}>
            <Box position="sticky" top={'20px'} left={0}>
            <CharacterSelector
              onSelectOption={(option) =>
                setCharacterQuery({ ...characterQuery, gender: option.name })
              }
              selectedOption={characterQuery.gender}
              title="Select Gender"
              options={genres[0]?.genders || []}
            />
            <hr />
            <CharacterSelector
              selectedOption={characterQuery.species}
              onSelectOption={(option) =>
                setCharacterQuery({ ...characterQuery, species: option.name })
              }
              title="Select Species"
              options={genres[1]?.species || []}
            />
            <hr />
            <CharacterSelector
              selectedOption={characterQuery.status}
              onSelectOption={(option) =>
                setCharacterQuery({ ...characterQuery, status: option.name })
              }
              title="Select Status"
              options={genres[2]?.status || []}
            />
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() =>
                  setCharacterQuery({ gender: "", species: "", status: "" })
                }
              >
                Reset
              </Button>
            </Box>
            </Box>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box padding={10}>
            <CharacterGrid characterQuery={characterQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
