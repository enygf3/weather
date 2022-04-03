import favouritePage from "../favouritePage/favouritePage";
import { getSavedCity } from "../..";

function router() {
  //geting all elements from the main page
  let home = document.querySelector(".panel-item-home");
  let favourite = document.querySelector(".panel-item-favourites");

  let appInput = document.querySelector(".app-input");
  let appCityBlock = document.querySelector(".app-city-block");
  let block = document.querySelector(".block");
  let appCloud = document.querySelector(".app-cloud");
  let appTemp = document.querySelector(".app-temp");
  let appDetails = document.querySelector(".app-details");

  //checking if user clicked on "favourite" button, routing, deleteing elements from the main page
  //and checking if user clicks on any item from his save city
  favourite.addEventListener("click", (e) => {
    history.pushState(null, null, "/favourite");
    pageChange();
    let elements = document.querySelectorAll(".favourite-block-item");
    elements.forEach((el) => {
      el.onclick = function () {
        getSavedCity(el.firstChild.innerHTML);
        history.pushState(null, null, "/");
        pageChange();
      };
    });
  });

  //checking if user clidked on main page button, routing and deleting elements from the "favourite page"
  home.addEventListener("click", (e) => {
    history.pushState(null, null, "/");
    pageChange();
  });

  //checking if URL have changed
  window.addEventListener("popstate", () => {
    pageChange();
  });

  //routing function
  //checking URL if it includes "favourite" and then deleteing/rendering elements
  function pageChange() {
    if (location.href.includes("favourite")) {
      deleteElements("home");
      renderElements("favourite");
    } else {
      deleteElements("favourite");
      renderElements("home");
    }
  }

  //function that deletes all elements from main/favourite page
  function deleteElements(page) {
    if (page == "home") {
      appInput.style.display = "none";
      appCityBlock.style.display = "none";
      block.style.display = "none";
      appCloud.style.display = "none";
      appTemp.style.display = "none";
      appDetails.style.display = "none";
    } else {
      document.querySelector(".app-favourite").remove();
    }
  }
  //function that renders all elements from main/favourite page
  function renderElements(page) {
    if (page == "home") {
      appInput.style.display = "block";
      appCityBlock.style.display = "block";
      block.style.display = "flex";
      appCloud.style.display = "block";
      appTemp.style.display = "block";
      appDetails.style.display = "grid";
    } else {
      //function that renders "favourite" page
      favouritePage();
    }
  }
}

export default router;
