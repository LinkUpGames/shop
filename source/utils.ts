import { createContext } from "react";

type AppContextProps = {
  width: number;
  height: number;
};

/**
 * The app context
 */
export const AppContext = createContext<AppContextProps>({
  width: 0,
  height: 0,
});
