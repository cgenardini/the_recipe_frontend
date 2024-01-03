import { request, baseUrl } from "./const";

export const register = ({ name, email, password }) => {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((data) => {
    if (data.error) {
      Promise.reject(`Error: ${data.error}`);
    }
  });
};

export const storeItem = ({
  title,
  image,
  id,
  summary,
  sourceName,
  analyzedInstructions,
}) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      image,
      recipeId: id,
      summary,
      sourceName,
      analyzedInstructions,
    }),
  }).then((data) => {
    if (data.error) {
      Promise.reject(`Error: ${data.error}`);
    }
  });
};

export const authorize = ({ email, password }) => {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      return data;
    } else {
      return;
    }
  });
};

export const checkToken = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => {
    return data;
  });
};

export const saveItem = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
  });
};

export const unsaveItem = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
};

export const getUserRecipes = () => {
  return request(`${baseUrl}/items/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

// export const saveItem = (id) => {
//   return request(`${baseUrl}/users/me/${id}`, {
//     headers: {
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "application/json",
//     },
//     method: "PUT",
//   });
// };

// export const removeSavedItem = (id) => {
//   return request(`${baseUrl}/users/me/${id}`, {
//     headers: {
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "application/json",
//     },
//     method: "DELETE",
//   });
// };
