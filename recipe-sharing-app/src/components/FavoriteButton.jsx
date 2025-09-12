import { useRecipeStore } from "../store/recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
      style={{
        marginLeft: "10px",
        background: isFavorite ? "red" : "lightgray",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "5px 10px",
        cursor: "pointer",
      }}
    >
      {isFavorite ? "❤️ Unfavorite" : "🤍 Favorite"}
    </button>
  );
};

export default FavoriteButton;
