import React from "react";
import { Box } from "ink";

type Props = {
  content: React.JSX.Element;
};

/**
 * The content to display
 */
const Content = ({ content }: Props) => {
  return (
    <Box width={"100%"} borderStyle="single">
      {content}
    </Box>
  );
};

export default Content;
