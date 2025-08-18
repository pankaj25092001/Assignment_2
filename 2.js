
function getChennaiWeather(callback) {
	const lat = 13.0827;
	const lon = 80.2707;
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    //console.log(url);
	fetch(url)
		.then(response => response.json())
		.then(data => callback(null, data.current_weather))
		.catch(err => callback(err));
}


getChennaiWeather(function(err, weather) {
	if (err) {
		console.error('Failed to fetch weather:', err);
		return;
	}
	console.log('==============================');
	console.log('   Chennai Current Weather');
	console.log('==============================');
	console.log('Temperature:', weather.temperature + '°C');
	console.log('Wind Speed:', weather.windspeed + ' km/h');
	console.log('Weather Code:', weather.weathercode);
	console.log('Time:', weather.time);
	console.log('==============================');
});

