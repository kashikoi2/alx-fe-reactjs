import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  return (
    <div>
      <h2>My Favorites ❤️</h2>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id} style={{ marginBottom: "10px" }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          )
      )}
    </div>
  );
};

export default FavoritesList;
