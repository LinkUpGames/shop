import React, { useContext, useState } from "react";
import { AppContext } from "../utils.js";

type Props = {
  /**
   * The name to create a donut effect for
   */
  name: string;
};

/**
 * The donut effect
 */
const donut = ({}: Props) => {
  const { width, height } = useContext(AppContext);

  // The cell
  const [cell, setCell] = useState([]);

  // const spin = () => {
  // let A,B
  //   let i, j, k;
  //
  //
  //
  // };

  return <></>;
};

export default donut;
