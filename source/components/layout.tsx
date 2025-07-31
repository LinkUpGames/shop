import React, { useEffect, useRef, useState } from "react";
import { Box, measureElement } from "ink";

/**
 * The props
 */
type Props = {
  children: React.JSX.Element | React.JSX.Element[];
};

/**
 * The main layout
 */
const Layout = ({ children }: Props) => {
  const ref = useRef();

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (ref.current) {
      const { width, height } = measureElement(ref.current);

      setSize({
        width: width,
        height: height,
      });
    }
  }, []);

  return <Box ref={ref}>{children}</Box>;
};

export default Layout;
