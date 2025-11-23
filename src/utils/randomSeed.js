export const getRandomNumber = (min = 1, max = 999999) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
