import React from "react";
import Layout from "./components/layout.js";
import Sidebar from "./components/sidebar.js";
import Content from "./components/content.js";

type Props = {
  name: string | undefined;
};

const App = ({ name = "Stranger" }: Props) => {
  console.log("Bruh: ", name);

  return (
    <Layout>
      <Sidebar />

      <Content />
    </Layout>
  );
};

export default App;
