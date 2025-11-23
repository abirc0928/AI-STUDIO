import { useState } from "react";

const useImageModels = () => {
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);

  const getModels = async () => {
    try {
      setError(null);
      const res = await fetch("https://image.pollinations.ai/models");
      if (!res.ok) throw new Error("Failed to fetch models");
      const data = await res.json();
      setModels(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return { models, error, getModels };
};

export default useImageModels;
