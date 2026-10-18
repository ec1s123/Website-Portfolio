import { useEffect, useState } from "react";
import { SpaceModeContext } from "../hooks/spaceModeContext";

const STORAGE_KEY = "spaceMode";

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false;
  }
};

export const SpaceModeProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(readStored);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
    } catch {
      // Ignore quota / private-mode failures.
    }
    document.documentElement.classList.toggle("space-mode", enabled);
  }, [enabled]);

  const toggle = () => setEnabled((prev) => !prev);

  return (
    <SpaceModeContext.Provider value={{ enabled, setEnabled, toggle }}>
      {children}
    </SpaceModeContext.Provider>
  );
};
