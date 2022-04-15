import Service from "../service/service";
import valid from "../valid/valid";
import getFavourite from "../getFavourite/getFavourite";
import getTheme from "../getTheme/getTheme";
import catchError from "../catchError/catchError";
import deleteSimilarBlock from "../deleteSimilarBlock/deleteSimilarBlock";

const getSimilarCities = (props) => {
  let arr = [];

  //sending a query to get similar cities
  let WeatherService = new Service();
  WeatherService.getSearch(props).then((res) => getResults(res));

  //function that gets the result from the query, transforming it and creating items
  function getResults(res) {
    //pushing into a new arr first 3 elements from the response
    arr.push(res[0], res[1], res[2]);

    //creating block with 3 items(similar cities)

    let app = document.querySelector(".app-input");

    //checking if block already exists
    if (
      !document.querySelector(".app-input-block") &&
      !arr.includes(undefined)
    ) {
      let block = document.createElement("div");
      block.className = "app-input-block";
      app.appendChild(block);

      //creating elements for each item
      arr.forEach((el) => {
        let item = document.createElement("p");
        let itemBlock = document.createElement("div");
        itemBlock.className = "block-item";
        item.className = "block-item-text";
        item.innerHTML = el.name;
        itemBlock.appendChild(item);
        block.appendChild(itemBlock);
      });
    } else {
      //if the block already exists changing names of the items
      let items = document.querySelectorAll(".block-item-text");
      items[0].innerHTML = arr[0].name;
      items[1].innerHTML = arr[1].name;
      items[2].innerHTML = arr[2].name;
    }

    //checking if user clicked on some item of suggestions, then making a query
    //then deleting the suggestions and deleting input value
    document.querySelectorAll(".block-item").forEach((el) => {
      el.onclick = () => {
        WeatherService.getCurrent(el.innerText.toLowerCase())
          .then((res) => valid(res, el.innerText, getFavourite, getTheme))
          .catch((err) => {
            catchError(err);
          });

        deleteSimilarBlock();
        document.querySelector(".app-input-field").value = "";
      };
    });
  }
};

export default getSimilarCities;
