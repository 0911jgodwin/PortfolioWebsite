export const getImageUrl = (path) => {
  return new URL("/assets/" + path, import.meta.url).href;
};

export const getCVUrl = () => {
  return new URL("/assets/hero/JGodwinCV - GamesLatest.pdf", import.meta.url)
    .href;
};
