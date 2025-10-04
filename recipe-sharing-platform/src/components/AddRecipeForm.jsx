import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((i) => i.trim() !== "");
    if (ingredientList.length < 2) {
      setError("Please enter at least 2 ingredients.");
      return;
    }

    // Mock submission
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 60) + "...",
      image: "https://via.placeholder.com/600x400",
      ingredients: ingredientList,
      instructions: steps.split("\n").filter((s) => s.trim() !== ""),
    };

    console.log("Recipe Submitted:", newRecipe);

    // For now, just redirect back home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ➕ Add a New Recipe
        </h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter recipe title"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 200g flour\n2 eggs"
            ></textarea>
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preparation Steps (one per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="6"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Mix flour and eggs\nBake for 20 minutes"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
