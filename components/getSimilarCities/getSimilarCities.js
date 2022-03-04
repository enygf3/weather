const getSimilarCities = (props) => {
    const _apiBase = "https://api.weatherapi.com/v1/"
    const _apiKey = "f3355337615d498fbfa03825211912"   

    //sending a query to get similar cities
    fetch(`${_apiBase}search.json?key=${_apiKey}&q=${props}`)
    .then(res => res.json())
    .then(result => getResults(result))

    //function that gets the result from the query, transforming it and creating items
    function getResults(res) {
        let arr = [];

        //pushing into a new arr first 3 elements from the response
        for(let i = 0; i < 3; i++) {
            arr.push(res[i])
        }

        //creating block with 3 items(similar cities)

        let app = document.querySelector(".app-input")
        console.log(arr)

        if(!document.querySelector(".app-input-block")) {
            let block = document.createElement("div")
            block.className = "app-input-block"
            app.appendChild(block)
    
            for(let el of arr) {
                let item = document.createElement("p")
                let itemBlock = document.createElement("div")
                itemBlock.className = "block-item"
                item.className = "block-item-text"
                item.innerHTML = el.name
                itemBlock.appendChild(item)
                block.appendChild(itemBlock)
            }
        } else {
            let items = document.querySelectorAll(".block-item-text")
            for(let i = 0; i < 3; i++) {
                items[i].innerHTML = arr[i].name
            }
        }

        //creating p's for each element
        // for(let el of arr) {
        //     let p = document.createElement("p")
        //     p.className = "app-city-item"
        //     p.innerHTML = el.name
        //     cityBlock.appendChild(p)
        // }
    }
}

export default getSimilarCities