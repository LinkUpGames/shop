import React from "react";
import Gradient from "ink-gradient";
import Window from "../../components/window.js";
import BigText from "ink-big-text";

/**
 * The home page
 */
const Home = () => {
  return (
    <Window>
      <Gradient name="retro">
        <BigText text="Deez Nuts" />
      </Gradient>
    </Window>
  );
};

export default Home;
