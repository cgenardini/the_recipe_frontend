import { request, recipeBaseUrl, recipeApiKey } from "./const";

export const getRecipe = (query) => {
  return request(
    `${recipeBaseUrl}?apiKey=${recipeApiKey}&query=${query}&addRecipeInformation=true`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
