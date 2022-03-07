function pageRouter() {

    let routes = {};
    let templates = {};

    let app = document.getElementById("app")

    function home() {
        //creating divs
        let appInput = document.createElement('div');
        let appCityBlock = document.createElement('div');
        let block = document.createElement('div');

        //giving classes to divs
        appInput.className = "app-input"
        appCityBlock.className = "app-city-block"
        block.className = "block"
        
        //creating input and pushing it into appInput
        let input = document.createElement('input')
        input.className = "app-input-field"
        input.type = "text"
        input.placeholder = "Type a city"
        appInput.appendChild(input)

        //creating and pushing elements into appCityBlock
        let appCity = document.createElement('h3')
        appCity.className = "app-city"
        appCityBlock.appendChild(appCity)

        let appCityStar = document.createElement('img')
        appCityStar.className = "app-city-star"
        appCityStar.src = "data:image/png;base64,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"
        appCityBlock.appendChild(appCityStar)

        let appCityCheck = document.createElement('input')
        appCityCheck.className = "app-city-check"
        appCityCheck.type = "checkbox"
        appCityBlock.appendChild(appCityCheck)

        let appCityImg = document.createElement('img')
        appCityImg.className = "app-city-img"
        appCityImg.src = ""
        appCityBlock.appendChild(appCityImg)

        //creating 2 h3's in appCityBlock and pushing them
        let appTemp = document.createElement('h3')
        appTemp.className = "app-temp"
        appCityBlock.appendChild(appTemp)

        let appCloud = document.createElement('h3')
        appCloud.className = "app-cloud"
        appCityBlock.appendChild(appCloud)

        //creating first div for block
        let blockWindDirection = document.createElement('div')
        blockWindDirection.className = "block-wind-direction flex"

        let BWDimg = document.createElement('img') // BWD is a blockWindDirection
        BWDimg.src = "https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-wind-signal-weather-kmg-design-flat-kmg-design.png"
        blockWindDirection.appendChild(BWDimg)

        let blockWindDir = document.createElement('h3')
        blockWindDir.className = "block-wind-dir text"
        blockWindDirection.appendChild(blockWindDir)

        //creating second div for block
        let blockWind = document.createElement('div')
        blockWind.className = "block-wind flex"

        let blockWindImg = document.createElement('img')
        blockWindImg.src = "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-wind-weather-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png"
        blockWind.appendChild(blockWindImg)

        let blockWindSpeed = document.createElement('h3')
        blockWindSpeed.className = "block-wind-speed text"
        blockWind.appendChild(blockWindSpeed)

        //creating third div for block
        let blockHumidityData = document.createElement('div')
        blockHumidityData.className = "block-humidity-data flex"

        let BHDimg = document.createElement('img') // BHD is a blockHumidityData
        BHDimg.src = "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-water-miscellaneous-kiranshastry-gradient-kiranshastry.png"
        blockHumidityData.appendChild(BHDimg)

        let blockHumidity = document.createElement('h3')
        blockHumidity.className = "block-humidity text"
        blockHumidityData.appendChild(blockHumidity)

        //creating fourth div for block
        let blockPressureData = document.createElement('div')
        blockPressureData.className = "block-pressure-data flex"

        let BPDimg = document.createElement('img') // BPD is a blockPressureData
        BPDimg.src = "https://img.icons8.com/officexs/30/000000/atmospheric-pressure.png"
        blockPressureData.appendChild(BPDimg)

        let blockPressure = document.createElement('h3')
        blockPressure.className = "block-pressure text"
        blockPressureData.appendChild(blockPressure)

        //pushing all divs into a block
        block.appendChild(blockWindDirection)
        block.appendChild(blockWind)
        block.appendChild(blockHumidityData)
        block.appendChild(blockPressureData)

        //pushing all elements into an app
        app.appendChild(appInput)
        app.appendChild(appCityBlock)
        app.appendChild(block)

        let div = document.createElement('div');
        let link = document.createElement('a');
        link.href = '#/favourite';
        link.innerText = 'Favourite';
    
        div.appendChild(link);
    
        app.appendChild(div);

    }
    
    function favourite() {
        let div = document.createElement('div');
        let link = document.createElement('a');
        link.href = '/';
        link.innerText = 'Home';
    
        div.appendChild(link);
    
        app.appendChild(div);

        document.querySelector(".app-input").remove()
        document.querySelector(".app-city-block").remove()
        document.querySelector(".block").remove()
    }

    function route (path, template) {
        if (typeof template === 'function') {
            return routes[path] = template;
        }
        else if (typeof template === 'string') {
            return routes[path] = templates[template];
        } else {
            return;
        }
    }

    function template (name, templateFunction) {
        return templates[name] = templateFunction;
    }

    template('home', function(){
        home();
    });
    
    template('favourite', function(){
        favourite();
    });

    route('/', 'home');
    route('/favourite', 'favourite');

    function resolveRoute(route) {
        try {
            return routes[route];
        } catch (e) {
            throw new Error(`Route ${route} not found`);
        }
    }

    function router(evt) {
        let url = window.location.hash.slice(1) || '/';
        let route = resolveRoute(url);
    
        route();
    }

    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

}

export default pageRouter