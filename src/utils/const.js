export const recipes = [
  {
    title: "Pasta with Tuna",
    id: 0,
    sourceName: "TempSource",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Pasta With Tuna is a pescatarian main course. This recipe serves 4. For $1.68 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals.",
  },
  {
    title: "Pasta Margherita",
    id: 1,
    sourceName: "TempSource",
    image:
      "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Pasta Margherita is a delicious Italian dish. It features fresh tomatoes, mozzarella, and basil. This recipe is perfect for a quick and tasty meal.",
  },
  {
    title: "Pasta On The Border",
    id: 2,
    sourceName: "TempSource",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Pasta On The Border is a Tex-Mex inspired pasta dish. It's packed with bold flavors and is sure to satisfy your craving for a spicy and cheesy meal.",
  },
];

const checkResponses = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const request = (url, options) => {
  return fetch(url, options).then(checkResponses);
};

export const recipeBaseUrl =
  "https://api.spoonacular.com/recipes/complexSearch";

export const recipeApiKey = "d172a009c82042feba6b870822a78e3e";

export const errors = {
  forbidden: {
    code: "403",
    name: "Forbidden",
    message: `Access Forbidden: You don't have permission to view this page. This might be due to insufficient access rights or because the page is restricted to certain users. Return to the homepage or use the navigation menu to find what you're looking for.`,
  },
  server: {
    code: "500",
    name: "Error",
    message: `Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.`,
  },
  notFound: {
    code: "404",
    name: "Not Found",
    message: `Page Not Found: We're sorry, but the page you are looking for doesn't exist or may have been moved. Please check the URL for any errors and try again. Alternatively, you can return to our homepage.`,
  },
};

export const baseUrl = "http://localhost:3001";
