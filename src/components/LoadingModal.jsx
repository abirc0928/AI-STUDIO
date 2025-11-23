import React from 'react'

const LoadingModal = ({children}) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="p-8 rounded-lg flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}

export default LoadingModal
