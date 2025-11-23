import React, { useState } from "react";
import { DownloadContext } from "../context";

const DownloadedProvider = ({ children }) => {
    const [downloadedImages, setDownloadedImages] = useState([])

    return (
        <DownloadContext.Provider value={{ downloadedImages, setDownloadedImages }}>
            {children}
        </DownloadContext.Provider>
    );
};

export default DownloadedProvider;
