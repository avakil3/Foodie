"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type State = {
  recipes: any[];
  setRecipesList?: Dispatch<SetStateAction<never[]>>;
};

export const RecipesContext = createContext<State>({
  recipes: [],
});

export function Context({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipesList] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipesList }}>
      {children}
    </RecipesContext.Provider>
  );
}
