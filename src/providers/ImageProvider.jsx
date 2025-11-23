import React from "react";
import { ImageContext } from "../context";
import useImageModels from "../hoocks/useImageModels";
import useCreateImage from "../hoocks/useCreateImage";

const ImageProvider = ({ children }) => {
  const { models, error: modelError, getModels } = useImageModels();
  const { images, setImages, error: imageError, getImage, loading } = useCreateImage();

  return (
    <ImageContext.Provider
      value={{
        models,
        modelError,
        getModels,
        images,
        setImages,
        imageError,
        getImage,
        loading
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
