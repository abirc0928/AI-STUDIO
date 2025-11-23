import React, { useContext, useState } from "react";
import { DownloadContext, ImageContext, RouteContext } from "../context";
import ConfirmModal from "./ConfirmModal";


const ImageActions = ({ image }) => {
  const { downloadedImages, setDownloadedImages } = useContext(DownloadContext);
  const { images, setImages } = useContext(ImageContext);
  const { route } = useContext(RouteContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadImage = () => {
    if (!downloadedImages.includes(image)) {
      setDownloadedImages(prev => [...prev, image]);
    }
  };

  const handleDelete = () => {
    if (route === "create-img") {
      setImages(images.filter(img => img !== image));
    } else if (route === "downloaded-img") {
      setDownloadedImages(downloadedImages.filter(img => img !== image));
    }
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="absolute bottom-2 right-2 p-1 flex items-center gap-3">
        <img
          src="./assets/delete.svg"
          className="h-8 cursor-pointer"
          alt="delete"
          onClick={() => setShowConfirm(true)}
        />
        <div onClick={handleDownloadImage}>
          <a href={image} download>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
              <path d="m14 19 3 3v-5.5" />
              <path d="m17 22 3-3" />
              <circle cx="9" cy="9" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <ConfirmModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Image?"
        message="Are you sure you want to delete this image?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
        showConfirm={true}
      />
    </div>
  );
};

export default ImageActions;
