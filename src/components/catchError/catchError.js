//function that catch all errors of API query
function catchError(p) {
  let app = document.getElementById("app");

  console.log(p);

  //creating an element for error
  let errorBlock = document.createElement("div");
  errorBlock.className = "error-block";
  errorBlock.innerHTML = `Some error has occured. Try other city or check your internet connection`;
  app.appendChild(errorBlock);

  //function that smoothly show error
  const showEl = (props) => {
    props.style.opacity = "1";
  };

  //function that smoothly hide error
  const hideEl = (props) => {
    props.style.opacity = "0";
  };

  //function that deletes error
  const deleteEl = (props) => {
    props.remove();
  };

  setTimeout(showEl, 100, errorBlock);
  setTimeout(hideEl, 4000, errorBlock);
  setTimeout(deleteEl, 4500, errorBlock);

  return 404;
}

export default catchError;
