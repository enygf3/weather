const getFavourite = (cityInput, check, city, star) => {
  //checking if the localStorage contains the city
  if (!localStorage.getItem(cityInput)) {
    localStorage.setItem(cityInput, 0);
  }

  //handling click event on the star
  check.onclick = function () {
    //checking if city name is equal to wroten city name
    if (city.innerHTML.toLowerCase() === cityInput.toLowerCase()) {
      localStorage.setItem(cityInput, +!+localStorage.getItem(cityInput));
      //getting value of the city from localStorage
      if (+localStorage.getItem(cityInput)) {
        //if value is 1, then changing the star to filled
        star.src = "https://img.icons8.com/fluency/48/000000/star.png";
      } else if (+localStorage.getItem(cityInput) === 0) {
        //if value is 0, then changing the star empty
        star.src =
          "data:image/png;base64,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";
      }
    }
  };

  //getting city value from local storage
  if (+localStorage.getItem(cityInput)) {
    //if the value is 1, then changing the star to filled
    star.src = "https://img.icons8.com/fluency/48/000000/star.png";
  } else if (+localStorage.getItem(cityInput) === 0) {
    //if the value is 0, then changing the star to empty
    star.src =
      "data:image/png;base64,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";
  }
};

export default getFavourite;
