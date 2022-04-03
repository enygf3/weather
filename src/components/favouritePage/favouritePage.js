function favouritePage() {
  let app = document.getElementById("app");

  //checking if there is already favourite block
  if (!document.querySelector(".app-favourite")) {
    //creating main block and pushing it
    let appFav = document.createElement("div"); // appFav is an app-favourite
    appFav.className = "app-favourite";
    app.appendChild(appFav);

    //creating a title and pushing it
    let favTitle = document.createElement("h3"); // favTitle is an favourite-title
    favTitle.innerHTML = "Saved cities";
    favTitle.className = "favourite-title";
    appFav.appendChild(favTitle);

    //creating a block for items
    let favBlock = document.createElement("div"); //favBlock is a favourite-block
    favBlock.className = "favourite-block";
    appFav.appendChild(favBlock);

    //function that creates an element for each item
    let createEl = (item) => {
      let blockItem = document.createElement("div"); // blockItem is a block-item
      let blockItemText = document.createElement("h3"); // blockItemText is a block-item-text

      blockItem.className = "favourite-block-item";
      blockItemText.className = "block-item-text";

      blockItem.appendChild(blockItemText);

      //transforming the first letter into an uppercase
      blockItemText.innerHTML = Array.from(item).reduce(
        (prev, item, index) => (index !== 0 ? prev + item : item.toUpperCase()),
        ""
      );
      favBlock.appendChild(blockItem);
    };

    //getting saved cities from the localStorage
    let store = { ...localStorage };
    for (let key in store) {
      //creating an element for each item
      store[key] === "1" ? createEl(key) : 0;
    }
  }
}

export default favouritePage;
