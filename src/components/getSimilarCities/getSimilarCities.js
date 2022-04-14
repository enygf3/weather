import Service from "../service/service";

const getSimilarCities = (props) => {
  let arr = [];

  //sending a query to get similar cities
  let WeatherService = new Service();
  WeatherService.getSearch(props).then((res) => getResults(res));

  //function that gets the result from the query, transforming it and creating items
  function getResults(res) {
    //pushing into a new arr first 3 elements from the response
    for (let i = 0; i < 3; i++) {
      arr.push(res[i]);
    }

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
      for (let i = 0; i < 3; i++) {
        items[i].innerHTML = arr[i].name;
      }
    }
  }
};

export default getSimilarCities;
