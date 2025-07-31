import { Box } from "ink";
import SelectInput from "ink-select-input";
import React from "react";
import { routes } from "../navigation/routes.js";

type Items = NonNullable<React.ComponentProps<typeof SelectInput>["items"]>;
type Item = Items[number];

type Props = {
  routes: typeof routes;
  onSelect: (item: (typeof routes)[number]) => void;
};

/**
 * Sidebar
 */
const Sidebar = ({ routes, onSelect }: Props) => {
  const navigationSelect = (item: Item) => {
    const route = routes.find((r) => r.value === item.value);

    if (route) {
      onSelect(route);
    }
  };

  return (
    <Box borderStyle="singleDouble" width={40}>
      <SelectInput items={routes} onSelect={navigationSelect} />
    </Box>
  );
};

export default Sidebar;
