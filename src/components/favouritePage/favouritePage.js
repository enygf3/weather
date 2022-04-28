function favouritePage() {
  let app = document.getElementById("app");

  //checking if there is already favourite block
  if (!document.querySelector(".app-favourite")) {
    //creating main block and pushing it
    let appFav = document.createElement("div"); // appFav is an app-favourite
    appFav.className = "app-favourite";
    appFav.innerHTML = `
    <h3 class="favourite-title">Saved cities</h3>
    <div class="favourite-block"></div>`;
    app.appendChild(appFav);

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
      document.querySelector(".favourite-block").appendChild(blockItem);
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
