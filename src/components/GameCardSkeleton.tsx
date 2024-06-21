import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { px } from "framer-motion";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
