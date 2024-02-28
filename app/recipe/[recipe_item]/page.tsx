"use client";
import { useContext } from "react";
import { PiBowlFood } from "react-icons/pi";
import { RecipesContext } from "@/context/recipes_context";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const { recipes } = useContext(RecipesContext);
  const searchParams = useSearchParams();
  const recipe_title = searchParams.get("recipe_title");
  let recipe;
  if (recipes.length > 0) {
    recipe = recipes.find(
      (recipe) => recipe.recipe.label === recipe_title
    ).recipe;

    console.log(recipe);
  }
  return recipe ? (
    <div className="recipeContainer">
      <h1>{recipe.label}</h1>
      <p className="dishType">{recipe.dishType}</p>
      <div className="imageAndIngredientsContainer">
        <img src={recipe.image} />
        <div className="ingredientsContainer">
          <h3>Ingredients:</h3>
          <hr className="ingredientBorder" />
          {recipe.ingredientLines.map((ingredientLine: string) => (
            <div className="ingredient">
              <PiBowlFood />
              <p>{ingredientLine}</p>
            </div>
          ))}
        </div>
      </div>

      <a href={recipe.url} target="_blank" className="visit-recipe-link">
        Visit Recipe's Detailed Instructions
      </a>
    </div>
  ) : (
    <div className="error-message">
      Recipe not found as the Search data was not saved in Local Storage (in
      dev). Thus, you cannot refresh the page. Please go to Search and search
      again.
    </div>
  );
}
