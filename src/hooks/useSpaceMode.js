import { useContext } from "react";
import { SpaceModeContext } from "./spaceModeContext";

export const useSpaceMode = () => {
  const ctx = useContext(SpaceModeContext);
  if (!ctx) {
    throw new Error("useSpaceMode must be used within SpaceModeProvider");
  }
  return ctx;
};
