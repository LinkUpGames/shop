import React from "react";
import Home from "../pages/home/home.js";
import SelectInput from "ink-select-input";

type Item = NonNullable<
  React.ComponentProps<typeof SelectInput>["items"]
>[number];

/**
 * The routes in the app to go for
 */
export const routes: (Item & { component: React.JSX.Element })[] = [
  {
    label: "Pane 1",
    value: "pane_one",
    component: <Home />,
  },
  {
    label: "Pane 2",
    value: "pane_two",
    component: <></>,
  },
  {
    label: "Exit",
    value: "exit",
    component: <></>,
  },
];
