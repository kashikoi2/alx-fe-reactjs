import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        placeholder="Recipe title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "5px" }}
      />
      <textarea
        value={description}
        placeholder="Recipe description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "5px" }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
