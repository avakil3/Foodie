"use client";
import { useState } from "react";
import RecipesSearch from "@/components/RecipesSearch";
import Header from "@/components/Header";
import RecipesList from "@/components/RecipesList";
import BounceLoader from "react-spinners/BounceLoader";
import { Context, RecipesContext } from "@/context/recipes_context";
import { useContext } from "react";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Home() {
  const [recipes, setRecipesList] = useState<Array<any>>([]);
  // const { recipes, setRecipesList } = useContext(RecipesContext);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <main>
        <Context>
          <Header>
            <RecipesSearch
              setRecipesList={setRecipesList}
              setSearchInput={setSearchInput}
              setLoading={setLoading}
            />
          </Header>

          {loading ? (
            <BounceLoader
              color={"#ff6600"}
              loading={loading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <RecipesList recipes={recipes} searchInput={searchInput} />
          )}
        </Context>
      </main>
    </>
  );
}
