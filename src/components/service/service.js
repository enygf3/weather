export default class Service {
  _apiBase = "https://api.weatherapi.com/v1/";
  _apiKey = "f3355337615d498fbfa03825211912";

  async getResource(url) {
    const response = await fetch(`${url}`, {
      method: "GET",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status is ${response.status}`);
    }

    return await response.json();
  }

  async getCurrent(props = "Minsk") {
    const res = await this.getResource(
      `${this._apiBase}current.json?key=${this._apiKey}&q=${props}&aqi=no`
    );
    return res;
  }

  async getSearch(props) {
    const res = await this.getResource(
      `${this._apiBase}search.json?key=${this._apiKey}&q=${props}`
    );
    return res;
  }
}
