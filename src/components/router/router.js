function router() {
	let home = document.querySelector(".panel-item-home");
	let favourite = document.querySelector(".panel-item-favourites");

	let appInput = document.querySelector(".app-input");
	let appCityBlock = document.querySelector(".app-city-block");
	let block = document.querySelector(".block");
	let appCloud = document.querySelector(".app-cloud");
	let appTemp = document.querySelector(".app-temp");

	favourite.addEventListener("click", (e) => {
		history.pushState(null, null, "/favourite");
		pageChange();
	});

	home.addEventListener("click", (e) => {
		history.pushState(null, null, "/");
		pageChange();
	});

	window.addEventListener("popstate", () => {
		pageChange();
	});

	function pageChange() {
		let url = location.href;
		if (url.includes("favourite")) {
			deleteElements("home");
		} else {
			deleteElements("favourite");
			renderElements("home");
		}
	}

	function deleteElements(page) {
		if (page == "home") {
			appInput.style.display = "none";
			appCityBlock.style.display = "none";
			block.style.display = "none";
			appCloud.style.display = "none";
			appTemp.style.display = "none";
		}
	}

	function renderElements(page) {
		if (page == "home") {
			appInput.style.display = "block";
			appCityBlock.style.display = "block";
			block.style.display = "flex";
			appCloud.style.display = "block";
			appTemp.style.display = "block";
		}
	}
}

export default router;
