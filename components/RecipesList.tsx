import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { RecipesContext } from "@/context/recipes_context";

function RecipesList({ searchInput }: { searchInput: String }) {
  const { recipes } = useContext(RecipesContext);

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
        {recipes.map((recipe: any) => (
          <div className="recipe" key={recipe.recipe.label}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} />
            <ul>
              {recipe.recipe.ingredientLines.map((ingredient: string) => (
                <li>{ingredient}</li>
              ))}
            </ul>
            <Link
              href={{
                pathname: `/recipe/${recipe.recipe.label}`,
                query: { recipe_title: recipe.recipe.label },
              }}
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipesList;
