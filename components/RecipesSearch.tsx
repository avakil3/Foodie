import { RecipesContext } from "@/context/recipes_context";
import React, { useContext, useRef } from "react";

function RecipesSearch({
  setSearchInput,
  setLoading,
}: {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const inputRef = useRef<RefObject<HTMLInputElement>>();
  const { setRecipesList } = useContext(RecipesContext);

  const fetchRecipes = async (searchValue: String) => {
    setLoading(true);
    const APP_ID = "8c984577";
    const APP_KEY = "7a96c189940ffa68034d76988a382500";
    const recipes = await fetch(
      `https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`
    )
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .catch((err) => {
        setLoading(false);
        throw new Error("No recipe found!");
      });
    setRecipesList(recipes.hits);
  };

  return (
    <div className="searchBarContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchRecipes(inputRef.current.value);
          setSearchInput(inputRef.current.value);
        }}
      >
        <input ref={inputRef} type="text" placeholder="Search for recipe" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default RecipesSearch;
