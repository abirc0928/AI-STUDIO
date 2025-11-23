export const getResolutionFromRatio = (ratio) => {
    const aspectMap = {
        "1:1":  { width: 1024, height: 1024 },
        "16:9": { width: 1280, height: 720 },
        "4:3":  { width: 1024, height: 768 },
        "3:2":  { width: 1024, height: 682 },
    };

    return aspectMap[ratio] || aspectMap["1:1"]; 
};
