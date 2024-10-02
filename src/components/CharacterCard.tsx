import { Character } from "../hooks/useCharacters";
import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <>
      <Card>
        <Image src={character.image} />
        <CardBody>
          <Heading fontSize="2xl">
            {character.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default CharacterCard;
