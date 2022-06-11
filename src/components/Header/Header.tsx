import type { Component } from "solid-js";
import { Box } from "../primitives";

export const Header: Component = () => {
  return (
    <Box py={6} bg={"primary"}>
      i am the best editor app out there
    </Box>
  );
};
