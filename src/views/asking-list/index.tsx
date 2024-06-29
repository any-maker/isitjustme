"use client";

import type { Asking } from "@/types";
import { Card, Stack } from "@chakra-ui/react";

import AskingCard from "./asking-card";

const MOCK_DATA: Array<Asking> = [
  {
    id: 1,
    asker: "as34ff",
    content:
      "Do you have a favorite hobby? What do you enjoy doing in your free time?",
    agreeCount: 10,
    disagreeCount: 2,
    createdDate: "2024-06-25",
  },
  {
    id: 2,
    asker: "cfqp35",
    content:
      "Is there a book or movie you've recently read/watched that you highly recommend? Why do you think others should check it out?",
    agreeCount: 10,
    disagreeCount: 2,
    createdDate: "2024-06-25",
  },
  {
    id: 3,
    asker: "9asbp4",
    content:
      "If you could travel to any country or city right now, where would you go? What draws you to that place?",
    agreeCount: 1234,
    disagreeCount: 243,
    createdDate: "2024-06-25",
  },
  {
    id: 4,
    asker: "cbtp32",
    content:
      "What is one value or principle that you consider most important in your daily life? What does it mean to you?",
    agreeCount: 102,
    disagreeCount: 2135,
    createdDate: "2024-06-25",
  },
  {
    id: 5,
    asker: "opeff1",
    content:
      "What dream or goal are you most passionate about right now? What steps are you taking to achieve it?",
    agreeCount: 5,
    disagreeCount: 0,
    createdDate: "2024-06-25",
  },
];

const AskingList = () => {
  return (
    <Card
      sx={{
        padding: "16px",
      }}
      width={{
        base: "330px",
        sm: "330px",
        md: "650px",
        lg: "850px",
      }}
    >
      <Stack spacing={6}>
        {MOCK_DATA.map((asking) => (
          <AskingCard key={asking.id} asking={asking} />
        ))}
      </Stack>
    </Card>
  );
};

export default AskingList;
