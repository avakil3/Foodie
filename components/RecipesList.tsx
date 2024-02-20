import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { RecipesContext } from "@/context/recipes_context";

function RecipesList({
  recipes,
  searchInput,
}: {
  recipes: Array<any>;
  searchInput: String;
}) {
  // const { recipes, setRecipesList } = useContext<Array<any> | null>(
  //   RecipesContext
  // );

  console.log(recipes);
  return (
    <>
      {searchInput && (
        <div className="recipeListBorderContainer">
          <p>Showing results for "{searchInput}"</p>
          <hr className="recipeListBorder" />
        </div>
      )}
      <div id="results">
        {recipes.length == 0 && searchInput && <div>NO RECIPES FOUND...</div>}
        {recipes.map((recipe: {}, index: Number) => (
          <div className="recipe" key={recipe + index}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} />
            <ul>
              {recipe.recipe.ingredientLines.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
            <Link href={`/recipe/${recipe.recipe.label}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipesList;
