const hanndleFavorite = (e, item) => {
  let oldStorages = localStorage.getItem("favorites");
  if (oldStorages) {
    oldStorages = JSON.parse(oldStorages);
    const result = oldStorages.find(value => value.id === item.id);
    if (result === undefined) {
      let newStorage = [...oldStorages, item];
      localStorage.setItem("favorites", JSON.stringify(newStorage));
    } else {
      const storageIndex = oldStorages.indexOf(result);
      oldStorages.splice(storageIndex, 1);
      localStorage.setItem("favorites", JSON.stringify(oldStorages));
    }
  } else {
    let newStorage = [item];
    localStorage.setItem("favorites", JSON.stringify(newStorage));
  }
};

const checkFavorite = id => {
  let favoriteData = localStorage.getItem("favorites");
  if (favoriteData) {
    favoriteData = JSON.parse(favoriteData);
  }
  return favoriteData.filter(value => value.id === id);
};
export { hanndleFavorite, checkFavorite };
