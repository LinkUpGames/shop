import React, { useState } from "react";
import Layout from "./components/layout.js";
import Sidebar from "./components/sidebar.js";
import Content from "./components/content.js";
import { routes } from "./navigation/routes.js";

type Props = {
  name: string | undefined;
};

const App = ({ name = "Stranger" }: Props) => {
  // const { exit } = useApp();

  // The content to display
  const [content, setContent] = useState<React.JSX.Element>(<></>);

  console.log("Bruh: ", name);

  /**
   * The navigation to selected
   */
  const routeSelected = (item: (typeof routes)[number]) => {
    setContent(item.component);
  };

  return (
    <Layout>
      <Sidebar routes={routes} onSelect={routeSelected} />

      <Content content={content} />
    </Layout>
  );
};

export default App;
