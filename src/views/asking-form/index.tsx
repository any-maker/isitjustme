"use client";

import { useState } from "react";

import { Box, Button, Card, Textarea, Stack } from "@chakra-ui/react";

const AskingForm = () => {
  const [content, setContent] = useState("");

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
      <Stack>
        <Textarea
          rows={4}
          resize="none"
          value={content}
          placeholder="Is it just me?"
          onChange={(e) => setContent(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
        <Button
          sx={{
            color: "white",
            backgroundColor: "yellow.400",
            "&:hover": {
              backgroundColor: "yellow.300",
            },
          }}
        >
          Ask
        </Button>
      </Stack>
    </Card>
  );
};

export default AskingForm;
