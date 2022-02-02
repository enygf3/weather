export default class Service {
    _apiBase = "http://api.weatherapi.com/v1/"
    _apiKey = "f3355337615d498fbfa03825211912"
    defaultLoc = "Minsk"

    async getResource(url, city) {

        if(!city) {
            city = this.defaultLoc
        }

        const response = await fetch(`${this._apiBase}${url}.json?key=${this._apiKey}&q=${city}`, {
            method: 'GET',
            mode: 'cors'
        })

    if(!response.ok) {
        throw new Error(`Could not fetch ${city}, status is ${response.status}`)
    } 

    return await response.json()
    }

    async getCurrent(city) {
        const res = await this.getResource("current", city)
        return res
    }
}