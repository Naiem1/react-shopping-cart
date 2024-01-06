import { useContext } from "react";
import { ToggleContext } from "../state/context/toggleContext";

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};