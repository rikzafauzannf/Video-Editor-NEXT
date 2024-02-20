import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToggleContextProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

// Buatlah sebuah context baru
const ToggleContext = createContext<ToggleContextProps | undefined>(undefined);

// Buatlah sebuah komponen penyedia (provider) untuk menyediakan status toggle dan fungsi untuk mengubahnya
export const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <ToggleContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Buatlah sebuah fungsi custom hook untuk mengakses status toggle dan fungsi untuk mengubahnya
export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
