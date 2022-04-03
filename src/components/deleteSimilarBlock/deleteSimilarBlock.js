const deleteSimilarBlock = (props) => {
  let block = document.querySelector(".app-input-block");
  if (props || block) {
    block.remove();
  }
};

export default deleteSimilarBlock;
