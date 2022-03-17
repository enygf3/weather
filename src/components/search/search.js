const getSimilarCities = (props) => {
	const _apiBase = "https://api.weatherapi.com/v1/";
	const _apiKey = "f3355337615d498fbfa03825211912";

	fetch(`${_apiBase}search.json?key=${_apiKey}&q=${props}`)
		.then((res) => res.json())
		.then((result) => getResults(result));

	function getResults(res) {
		console.log(res[0], res[1], res[2]);
	}
};

export default getSimilarCities;
