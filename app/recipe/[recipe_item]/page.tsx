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
    // recipe = recipe;
  }
  return recipe ? (
    <div className="recipeContainer">
      <h1>{recipe.label}</h1>
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

// const recipe = {
//   uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_db742742099859a8053b992dd3c1f452",
//   label: "The Crispy Egg",
//   image:
//     "https://edamam-product-images.s3.amazonaws.com/web-img/16c/16c9f7a2bcf8a7643ada8729cd693c9d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLWVhc3QtMSJHMEUCIQC5d84YWER4L%2FQIXuP33LasbmztmDRCEo9QPSTqacM0yQIgMOFmRyRutJpfuLcupAlRW4oWalvQ51xLIIoSbz8NjXkquQUIFxAAGgwxODcwMTcxNTA5ODYiDNXnM%2BqmIAKaPfcpVCqWBfM97EPKVUbFoDm%2FxqwdSRUK1%2F5Sq01jhA%2BuL5xyyQOorM5NoM0enO%2FQSGZWAgJJld9IxGoJV6v6YDntN4q0eBM1m1ntQj%2BiwL6twWyHk%2BIBbubLjijyp77s4o9TEjWIlAoeFDDdf%2FANrtnKDgZbO1iLMuPuXjLDEEQbQ0OS%2Fo88zBTgSH%2BdD0My2Q%2BOgDgX%2B9CmznoLEtnQ4GVyEIABNUMGwrquFxa3TyPLuShaDTRorUcp%2F5vq7yFVrACVoCNDLT60BqGoMdpoFDC4t4XbwJLrnRcnFa2cnHq8V3zFaWBN2SCFPJigRsq%2BzNggaFNUqdjtXx4PG%2F0pGUdDe7EGTnOL0jEj%2FrWeXYuNbAZ3tM91Jjj7GwdSnmDq2LmSMh2PT5dwimLV5jh8Y603sy7y4tRyGl81KT0qpLFp52Bm%2FxVvjOwH3XdUC88wpeMxFZsfA2no6lryOaYqpEN8G0dWJt5KYVfRfxGbKKzIkIsOCcNVb%2B5KM8txmIuvQyhuTw31q6OyI9ARDAsN5peej1hJsYggoRCvkQfsCPkKez37wKNPGxmhjK5Im0nDVTiQSZlTI17S9zumkDqK4FkYM%2BxoVckKOrDIJMPl9LWJ%2BSy%2BXMBvNUUFybIyUFcYrpw%2B3eXqAyo2%2Bccjx82K1MFIdhymYlEGcg2bhoX3ixnbutPaKoYlGSTwzGqnE7221cYYDTat5zCgKjD1JPNRMBvnL%2FQQ6l2YxQhwXoZ1DbijeXxfgBlLfsjoVjbvlwoWvNoonnleVN2gGpW8aZxJ2DmvO%2BSi4vaMLpIgaiiiyH5Z6w3QMbpzJ4NvQ4oJnHfMrtGzjGFh6LceId1MSThBm9v9uH6tBcAoOCB0lBNrhuwoChCr47sYWrYw4VwLMLW1za4GOrEBnSSvSwKR%2FNuHt9c7xwU3RQt6U8tgR%2FHM94vWCGyscsXYYQQXI26Gzd1oFpo2zYSACwA7pw7vPDhjdVA%2BTb3mGOz4QDS%2FBd8jxHdmIua1KzvenztdWg23wUc0qZr%2BfkXnlsF7S9m%2B6z%2FaUIDB%2FiLB8C6MgmruPN%2FB4pWFgJDJZmUe2Kdy3qRKybSlY15jHBHoXF%2FlerfAxw5jvmtad7Uy6DNpKDMhe8g1v8wCoGH%2FvM9C&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240219T150337Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPKXOAOPB%2F20240219%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bcb7650509d757375fc9164a648d8818134778cd1db8e9c894debe198426d369",
//   source: "Smitten Kitchen",
//   url: "http://smittenkitchen.com/blog/2014/10/the-crispy-egg/",
//   shareAs:
//     "http://www.edamam.com/recipe/the-crispy-egg-db742742099859a8053b992dd3c1f452/egg",
//   yield: 2,
//   dietLabels: ["Low-Carb", "Low-Sodium"],
//   healthLabels: [
//     "Sugar-Conscious",
//     "Low Potassium",
//     "Kidney-Friendly",
//     "Keto-Friendly",
//     "Vegetarian",
//     "Pescatarian",
//     "Paleo",
//     "Mediterranean",
//     "Dairy-Free",
//     "Gluten-Free",
//     "Wheat-Free",
//     "Peanut-Free",
//     "Tree-Nut-Free",
//     "Soy-Free",
//     "Fish-Free",
//     "Shellfish-Free",
//     "Pork-Free",
//     "Red-Meat-Free",
//     "Crustacean-Free",
//     "Celery-Free",
//     "Mustard-Free",
//     "Sesame-Free",
//     "Lupine-Free",
//     "Mollusk-Free",
//     "Alcohol-Free",
//     "Sulfite-Free",
//     "Kosher",
//   ],
//   cautions: ["Sulfites"],
//   ingredientLines: [
//     "1 glug olive oil or cooking fat of your choice",
//     "1 egg, any size",
//     "Salt, pepper, herbs, spices or hot sauce, or all of the above",
//   ],
//   ingredients: [
//     {
//       text: "1 glug olive oil or cooking fat of your choice",
//       quantity: 1,
//       measure: "<unit>",
//       food: "olive",
//       weight: 3.2,
//       foodCategory: "canned fruit",
//       foodId: "food_bt7u5w5a064gusa46msxfb38ag06",
//       image:
//         "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg",
//     },
//     {
//       text: "1 egg, any size",
//       quantity: 1,
//       measure: "<unit>",
//       food: "egg",
//       weight: 43,
//       foodCategory: "Eggs",
//       foodId: "food_bhpradua77pk16aipcvzeayg732r",
//       image:
//         "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
//     },
//     {
//       text: "Salt, pepper, herbs, spices or hot sauce, or all of the above",
//       quantity: 0,
//       measure: null,
//       food: "Salt",
//       weight: 0.2772,
//       foodCategory: "Condiments and sauces",
//       foodId: "food_btxz81db72hwbra2pncvebzzzum9",
//       image:
//         "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
//     },
//   ],
//   calories: 65.202,
//   totalWeight: 46.25891024742268,
//   totalTime: 0,
//   cuisineType: ["chinese"],
//   mealType: ["lunch/dinner"],
//   dishType: ["starter"],
//   totalNutrients: {
//     ENERC_KCAL: {
//       label: "Energy",
//       quantity: 65.202,
//       unit: "kcal",
//     },
//     FAT: {
//       label: "Fat",
//       quantity: 4.4380999999999995,
//       unit: "g",
//     },
//     FASAT: {
//       label: "Saturated",
//       quantity: 1.4188599999999998,
//       unit: "g",
//     },
//     FATRN: {
//       label: "Trans",
//       quantity: 0.01634,
//       unit: "g",
//     },
//     FAMS: {
//       label: "Monounsaturated",
//       quantity: 1.8186,
//       unit: "g",
//     },
//     FAPU: {
//       label: "Polyunsaturated",
//       quantity: 0.841428,
//       unit: "g",
//     },
//     CHOCDF: {
//       label: "Carbs",
//       quantity: 0.50288,
//       unit: "g",
//     },
//     "CHOCDF.net": {
//       label: "Carbohydrates (net)",
//       quantity: 0.45167999999999997,
//       unit: "g",
//     },
//     FIBTG: {
//       label: "Fiber",
//       quantity: 0.0512,
//       unit: "g",
//     },
//     SUGAR: {
//       label: "Sugars",
//       quantity: 0.1591,
//       unit: "g",
//     },
//     PROCNT: {
//       label: "Protein",
//       quantity: 5.44488,
//       unit: "g",
//     },
//     CHOLE: {
//       label: "Cholesterol",
//       quantity: 159.96,
//       unit: "mg",
//     },
//     NA: {
//       label: "Sodium",
//       quantity: 107.43717600000001,
//       unit: "mg",
//     },
//     CA: {
//       label: "Calcium",
//       quantity: 26.91013845938144,
//       unit: "mg",
//     },
//     MG: {
//       label: "Magnesium",
//       quantity: 5.288589102474227,
//       unit: "mg",
//     },
//     K: {
//       label: "Potassium",
//       quantity: 59.60071281979381,
//       unit: "mg",
//     },
//     FE: {
//       label: "Iron",
//       quantity: 0.9536544038164948,
//       unit: "mg",
//     },
//     ZN: {
//       label: "Zinc",
//       quantity: 0.5617989102474227,
//       unit: "mg",
//     },
//     P: {
//       label: "Phosphorus",
//       quantity: 85.236,
//       unit: "mg",
//     },
//     VITA_RAE: {
//       label: "Vitamin A",
//       quantity: 69.344,
//       unit: "µg",
//     },
//     VITC: {
//       label: "Vitamin C",
//       quantity: 0.028800000000000003,
//       unit: "mg",
//     },
//     THIA: {
//       label: "Thiamin (B1)",
//       quantity: 0.017296,
//       unit: "mg",
//     },
//     RIBF: {
//       label: "Riboflavin (B2)",
//       quantity: 0.19651000000000002,
//       unit: "mg",
//     },
//     NIA: {
//       label: "Niacin (B3)",
//       quantity: 0.033434,
//       unit: "mg",
//     },
//     VITB6A: {
//       label: "Vitamin B6",
//       quantity: 0.073388,
//       unit: "mg",
//     },
//     FOLDFE: {
//       label: "Folate equivalent (total)",
//       quantity: 20.21,
//       unit: "µg",
//     },
//     FOLFD: {
//       label: "Folate (food)",
//       quantity: 20.21,
//       unit: "µg",
//     },
//     FOLAC: {
//       label: "Folic acid",
//       quantity: 0,
//       unit: "µg",
//     },
//     VITB12: {
//       label: "Vitamin B12",
//       quantity: 0.3827,
//       unit: "µg",
//     },
//     VITD: {
//       label: "Vitamin D",
//       quantity: 0.86,
//       unit: "µg",
//     },
//     TOCPHA: {
//       label: "Vitamin E",
//       quantity: 0.5043,
//       unit: "mg",
//     },
//     VITK1: {
//       label: "Vitamin K",
//       quantity: 0.1738,
//       unit: "µg",
//     },
//     WATER: {
//       label: "Water",
//       quantity: 35.326117820494844,
//       unit: "g",
//     },
//   },
//   totalDaily: {
//     ENERC_KCAL: {
//       label: "Energy",
//       quantity: 3.2601,
//       unit: "%",
//     },
//     FAT: {
//       label: "Fat",
//       quantity: 6.827846153846153,
//       unit: "%",
//     },
//     FASAT: {
//       label: "Saturated",
//       quantity: 7.094299999999999,
//       unit: "%",
//     },
//     CHOCDF: {
//       label: "Carbs",
//       quantity: 0.16762666666666665,
//       unit: "%",
//     },
//     FIBTG: {
//       label: "Fiber",
//       quantity: 0.2048,
//       unit: "%",
//     },
//     PROCNT: {
//       label: "Protein",
//       quantity: 10.88976,
//       unit: "%",
//     },
//     CHOLE: {
//       label: "Cholesterol",
//       quantity: 53.32,
//       unit: "%",
//     },
//     NA: {
//       label: "Sodium",
//       quantity: 4.476549,
//       unit: "%",
//     },
//     CA: {
//       label: "Calcium",
//       quantity: 2.691013845938144,
//       unit: "%",
//     },
//     MG: {
//       label: "Magnesium",
//       quantity: 1.2591878815414828,
//       unit: "%",
//     },
//     K: {
//       label: "Potassium",
//       quantity: 1.2681002727615707,
//       unit: "%",
//     },
//     FE: {
//       label: "Iron",
//       quantity: 5.298080021202749,
//       unit: "%",
//     },
//     ZN: {
//       label: "Zinc",
//       quantity: 5.1072628204311155,
//       unit: "%",
//     },
//     P: {
//       label: "Phosphorus",
//       quantity: 12.17657142857143,
//       unit: "%",
//     },
//     VITA_RAE: {
//       label: "Vitamin A",
//       quantity: 7.704888888888888,
//       unit: "%",
//     },
//     VITC: {
//       label: "Vitamin C",
//       quantity: 0.032,
//       unit: "%",
//     },
//     THIA: {
//       label: "Thiamin (B1)",
//       quantity: 1.4413333333333331,
//       unit: "%",
//     },
//     RIBF: {
//       label: "Riboflavin (B2)",
//       quantity: 15.116153846153848,
//       unit: "%",
//     },
//     NIA: {
//       label: "Niacin (B3)",
//       quantity: 0.2089625,
//       unit: "%",
//     },
//     VITB6A: {
//       label: "Vitamin B6",
//       quantity: 5.645230769230769,
//       unit: "%",
//     },
//     FOLDFE: {
//       label: "Folate equivalent (total)",
//       quantity: 5.0525,
//       unit: "%",
//     },
//     VITB12: {
//       label: "Vitamin B12",
//       quantity: 15.945833333333333,
//       unit: "%",
//     },
//     VITD: {
//       label: "Vitamin D",
//       quantity: 5.733333333333333,
//       unit: "%",
//     },
//     TOCPHA: {
//       label: "Vitamin E",
//       quantity: 3.362,
//       unit: "%",
//     },
//     VITK1: {
//       label: "Vitamin K",
//       quantity: 0.14483333333333334,
//       unit: "%",
//     },
//   },
//   digest: [
//     {
//       label: "Fat",
//       tag: "FAT",
//       schemaOrgTag: "fatContent",
//       total: 4.4380999999999995,
//       hasRDI: true,
//       daily: 6.827846153846153,
//       unit: "g",
//       sub: [
//         {
//           label: "Saturated",
//           tag: "FASAT",
//           schemaOrgTag: "saturatedFatContent",
//           total: 1.4188599999999998,
//           hasRDI: true,
//           daily: 7.094299999999999,
//           unit: "g",
//         },
//         {
//           label: "Trans",
//           tag: "FATRN",
//           schemaOrgTag: "transFatContent",
//           total: 0.01634,
//           hasRDI: false,
//           daily: 0,
//           unit: "g",
//         },
//         {
//           label: "Monounsaturated",
//           tag: "FAMS",
//           schemaOrgTag: null,
//           total: 1.8186,
//           hasRDI: false,
//           daily: 0,
//           unit: "g",
//         },
//         {
//           label: "Polyunsaturated",
//           tag: "FAPU",
//           schemaOrgTag: null,
//           total: 0.841428,
//           hasRDI: false,
//           daily: 0,
//           unit: "g",
//         },
//       ],
//     },
//     {
//       label: "Carbs",
//       tag: "CHOCDF",
//       schemaOrgTag: "carbohydrateContent",
//       total: 0.50288,
//       hasRDI: true,
//       daily: 0.16762666666666665,
//       unit: "g",
//       sub: [
//         {
//           label: "Carbs (net)",
//           tag: "CHOCDF.net",
//           schemaOrgTag: null,
//           total: 0.45167999999999997,
//           hasRDI: false,
//           daily: 0,
//           unit: "g",
//         },
//         {
//           label: "Fiber",
//           tag: "FIBTG",
//           schemaOrgTag: "fiberContent",
//           total: 0.0512,
//           hasRDI: true,
//           daily: 0.2048,
//           unit: "g",
//         },
//         {
//           label: "Sugars",
//           tag: "SUGAR",
//           schemaOrgTag: "sugarContent",
//           total: 0.1591,
//           hasRDI: false,
//           daily: 0,
//           unit: "g",
//         },
//         {
//           label: "Sugars, added",
//           tag: "SUGAR.added",
//           schemaOrgTag: null,
//           total: 0,
//           hasRDI: false,
//           daily: 0,
//           unit: "g",
//         },
//       ],
//     },
//     {
//       label: "Protein",
//       tag: "PROCNT",
//       schemaOrgTag: "proteinContent",
//       total: 5.44488,
//       hasRDI: true,
//       daily: 10.88976,
//       unit: "g",
//     },
//     {
//       label: "Cholesterol",
//       tag: "CHOLE",
//       schemaOrgTag: "cholesterolContent",
//       total: 159.96,
//       hasRDI: true,
//       daily: 53.32,
//       unit: "mg",
//     },
//     {
//       label: "Sodium",
//       tag: "NA",
//       schemaOrgTag: "sodiumContent",
//       total: 107.43717600000001,
//       hasRDI: true,
//       daily: 4.476549,
//       unit: "mg",
//     },
//     {
//       label: "Calcium",
//       tag: "CA",
//       schemaOrgTag: null,
//       total: 26.91013845938144,
//       hasRDI: true,
//       daily: 2.691013845938144,
//       unit: "mg",
//     },
//     {
//       label: "Magnesium",
//       tag: "MG",
//       schemaOrgTag: null,
//       total: 5.288589102474227,
//       hasRDI: true,
//       daily: 1.2591878815414828,
//       unit: "mg",
//     },
//     {
//       label: "Potassium",
//       tag: "K",
//       schemaOrgTag: null,
//       total: 59.60071281979381,
//       hasRDI: true,
//       daily: 1.2681002727615707,
//       unit: "mg",
//     },
//     {
//       label: "Iron",
//       tag: "FE",
//       schemaOrgTag: null,
//       total: 0.9536544038164948,
//       hasRDI: true,
//       daily: 5.298080021202749,
//       unit: "mg",
//     },
//     {
//       label: "Zinc",
//       tag: "ZN",
//       schemaOrgTag: null,
//       total: 0.5617989102474227,
//       hasRDI: true,
//       daily: 5.1072628204311155,
//       unit: "mg",
//     },
//     {
//       label: "Phosphorus",
//       tag: "P",
//       schemaOrgTag: null,
//       total: 85.236,
//       hasRDI: true,
//       daily: 12.17657142857143,
//       unit: "mg",
//     },
//     {
//       label: "Vitamin A",
//       tag: "VITA_RAE",
//       schemaOrgTag: null,
//       total: 69.344,
//       hasRDI: true,
//       daily: 7.704888888888888,
//       unit: "µg",
//     },
//     {
//       label: "Vitamin C",
//       tag: "VITC",
//       schemaOrgTag: null,
//       total: 0.028800000000000003,
//       hasRDI: true,
//       daily: 0.032,
//       unit: "mg",
//     },
//     {
//       label: "Thiamin (B1)",
//       tag: "THIA",
//       schemaOrgTag: null,
//       total: 0.017296,
//       hasRDI: true,
//       daily: 1.4413333333333331,
//       unit: "mg",
//     },
//     {
//       label: "Riboflavin (B2)",
//       tag: "RIBF",
//       schemaOrgTag: null,
//       total: 0.19651000000000002,
//       hasRDI: true,
//       daily: 15.116153846153848,
//       unit: "mg",
//     },
//     {
//       label: "Niacin (B3)",
//       tag: "NIA",
//       schemaOrgTag: null,
//       total: 0.033434,
//       hasRDI: true,
//       daily: 0.2089625,
//       unit: "mg",
//     },
//     {
//       label: "Vitamin B6",
//       tag: "VITB6A",
//       schemaOrgTag: null,
//       total: 0.073388,
//       hasRDI: true,
//       daily: 5.645230769230769,
//       unit: "mg",
//     },
//     {
//       label: "Folate equivalent (total)",
//       tag: "FOLDFE",
//       schemaOrgTag: null,
//       total: 20.21,
//       hasRDI: true,
//       daily: 5.0525,
//       unit: "µg",
//     },
//     {
//       label: "Folate (food)",
//       tag: "FOLFD",
//       schemaOrgTag: null,
//       total: 20.21,
//       hasRDI: false,
//       daily: 0,
//       unit: "µg",
//     },
//     {
//       label: "Folic acid",
//       tag: "FOLAC",
//       schemaOrgTag: null,
//       total: 0,
//       hasRDI: false,
//       daily: 0,
//       unit: "µg",
//     },
//     {
//       label: "Vitamin B12",
//       tag: "VITB12",
//       schemaOrgTag: null,
//       total: 0.3827,
//       hasRDI: true,
//       daily: 15.945833333333333,
//       unit: "µg",
//     },
//     {
//       label: "Vitamin D",
//       tag: "VITD",
//       schemaOrgTag: null,
//       total: 0.86,
//       hasRDI: true,
//       daily: 5.733333333333333,
//       unit: "µg",
//     },
//     {
//       label: "Vitamin E",
//       tag: "TOCPHA",
//       schemaOrgTag: null,
//       total: 0.5043,
//       hasRDI: true,
//       daily: 3.362,
//       unit: "mg",
//     },
//     {
//       label: "Vitamin K",
//       tag: "VITK1",
//       schemaOrgTag: null,
//       total: 0.1738,
//       hasRDI: true,
//       daily: 0.14483333333333334,
//       unit: "µg",
//     },
//     {
//       label: "Sugar alcohols",
//       tag: "Sugar.alcohol",
//       schemaOrgTag: null,
//       total: 0,
//       hasRDI: false,
//       daily: 0,
//       unit: "g",
//     },
//     {
//       label: "Water",
//       tag: "WATER",
//       schemaOrgTag: null,
//       total: 35.326117820494844,
//       hasRDI: false,
//       daily: 0,
//       unit: "g",
//     },
//   ],
// };
