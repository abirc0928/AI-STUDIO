import React, { useContext, useState } from "react";
import { DownloadContext, ImageContext, RouteContext } from "../context";
import ConfirmModal from "./ConfirmModal";
import DownloadSVG from "../svg/downloadSVG.jsx"; 

const ImageActions = ({ image }) => {
  const { downloadedImages, setDownloadedImages } = useContext(DownloadContext);
  const { images, setImages } = useContext(ImageContext);
  const { route } = useContext(RouteContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadImage = () => {
    const exists = downloadedImages.includes(image);
    if (!exists) {
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
        {/* Delete Button */}
        <img
          src="./assets/delete.svg"
          className="h-8 cursor-pointer"
          alt="delete"
          onClick={() => setShowConfirm(true)}
        />

        {/* Download Button */}
        <div onClick={handleDownloadImage}>
          <a href={image} download>
            <DownloadSVG />
          </a>
        </div>
      </div>

      {/* Confirm Modal */}
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
