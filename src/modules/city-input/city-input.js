const inputIcon = document.querySelector(".input-icon")
const block = document.querySelector(".app-input")

inputIcon.addEventListener("click", (e) => {
    let popUp = document.createElement("div");
    popUp.className = "input-popup";
    block.appendChild(popUp);

    let title = document.createElement("h3")
    title.className = "popup-title"
    title.innerText = "Type a city"
    popUp.appendChild(title)

    let input = document.createElement("input")
    input.type = "text"
    input.className = "popup-input"
    popUp.appendChild(input)
})