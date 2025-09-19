import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}&per_page=12`);
    return response.data.items;
  } catch (error) {
    throw new Error("No users found");
  }
};
