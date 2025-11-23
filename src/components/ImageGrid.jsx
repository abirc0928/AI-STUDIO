import React, { useContext } from "react";
import { RouteContext } from "../context";
import ImageActions from "./ImageActions ";

function ImageGrid({ images, emptyMessage }) {
  const { route } = useContext(RouteContext)
  if (!images || images.length === 0) {
    return <p className="text-zinc-400">{emptyMessage}</p>;
  }

  return (
    <div>
      {route === "create-img" && (
        <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${route === "create-img" ? "lg:grid-cols-3" : "lg:grid-cols-5"
          } gap-4`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-card rounded-xl overflow-hidden relative bg-zinc-900 flex items-center justify-center"
          >
            <ImageActions image={image} />

            {/* IMAGE LOGIC */}
            {image === "error" ? (
              <div className="w-full h-48 flex items-center justify-center text-red-400 text-sm">
                Unable to load
              </div>
            ) : (
              <img
                src={image}
                alt={`Generated ${index}`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "";
                  e.target.style.display = "none";
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
