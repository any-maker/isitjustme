import { Heading } from "@chakra-ui/react";

const Title = () => {
  return (
    <Heading
      fontSize={{
        base: "3xl",
        lg: "4xl",
      }}
      color="yellow.400"
      fontWeight={700}
    >
      Is It Just Me?
    </Heading>
  );
};

export default Title;
