"use client";
import { createContext, useState } from "react";

export const RecipesContext = createContext([]);

export function Context({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipesList] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipesList }}>
      {children}
    </RecipesContext.Provider>
  );
}
