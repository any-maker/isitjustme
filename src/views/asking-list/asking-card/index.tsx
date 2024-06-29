import type { Asking } from "@/types";

import {
  Box,
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { BsHandThumbsDownFill } from "react-icons/bs";

type Props = {
  asking: Asking;
};

const AskingCard = ({ asking }: Props) => {
  return (
    <Card>
      <CardBody>
        <Stack>
          <Heading size="xs">{asking.asker}</Heading>
          <Text>{asking.content}</Text>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row">
              <Text color="gray.500">Agree {asking.agreeCount}</Text>
              <Text color="gray.500">Disagree {asking.disagreeCount}</Text>
            </Stack>
            <Stack direction="row">
              <IconButton
                aria-label="agree"
                variant="outline"
                icon={<BsHandThumbsUp />}
              />
              <IconButton
                aria-label="disagree"
                variant="outline"
                icon={<BsHandThumbsDown />}
              />
            </Stack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default AskingCard;
