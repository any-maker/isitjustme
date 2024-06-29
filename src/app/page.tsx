import { Stack } from "@chakra-ui/react";

import Provider from "@/providers";

import Title from "@/views/title";
import AskingForm from "@/views/asking-form";
import AskingList from "@/views/asking-list";

export default function Home() {
  return (
    <Provider>
      <Stack alignItems="center" spacing={5}>
        <Title />
        <AskingForm />
        <AskingList />
      </Stack>
    </Provider>
  );
}
