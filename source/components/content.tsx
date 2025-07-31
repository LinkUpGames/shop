import React from "react";
import { Box } from "ink";
import Home from "../pages/home/home.js";

type Props = {};

/**
 * The content to display
 */
const Content = ({}: Props) => {
  return (
    <Box width={"100%"} borderStyle="single">
      <Home />
    </Box>
  );
};

export default Content;
