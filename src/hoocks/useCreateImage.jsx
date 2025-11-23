import { useState } from "react";

const useCreateImage = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getImage = async (url) => {
        setLoading(true);
        try {
            setError(null);

            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch image");

            const blob = await response.blob();
            const imageObjectUrl = URL.createObjectURL(blob);
            
            setImages(prev => [...prev, imageObjectUrl]);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching image:", err);
        } finally {
            setLoading(false);
        }
    };

    return { images, error, loading, getImage, setImages };
};

export default useCreateImage;
