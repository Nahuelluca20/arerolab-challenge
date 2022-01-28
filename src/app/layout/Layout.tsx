import React from "react";
import {Flex, Center, Container} from "@chakra-ui/react";

import Navbar from "./Navbar";

const layout: React.FC = ({children}) => {
  return (
    <Flex backgroundColor="gray.100" direction="column" flex={1}>
      <Navbar />
      <Center padding={6}>
        <Container maxWidth="6xl">{children}</Container>
      </Center>
    </Flex>
  );
};

export default layout;
