import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";
import { Platform } from "../hooks/useGames";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformiconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
