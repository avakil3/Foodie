"use client";
import { useState } from "react";
import RecipesSearch from "@/components/RecipesSearch";
import Header from "@/components/Header";
import RecipesList from "@/components/RecipesList";
import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Home() {
  // const [recipes, setRecipesList] = useState<Array<any>>([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <main>
        <Header>
          <RecipesSearch
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
          <RecipesList searchInput={searchInput} />
        )}
      </main>
    </>
  );
}
