const deleteSimilarBlock = (props) => {
  if (props || document.querySelector(".app-input-block")) {
    document.querySelector(".app-input-block").remove();
  }
};

export default deleteSimilarBlock;
