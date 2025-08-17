// //QUESTION 3
// Script to fetch and display latest weather for 3 cities in parallel

const cities = [
	{ name: 'Chennai', lat: 13.0827, lon: 80.2707 },
	{ name: 'Delhi', lat: 28.6139, lon: 77.2090 },
	{ name: 'Mumbai', lat: 19.0760, lon: 72.8777 }
];

function getWeather(city) {
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
	return fetch(url)
		.then(res => res.json())
		.then(data => ({
			name: city.name,
			weather: data.current_weather
		}));
}

Promise.all(cities.map(getWeather)).then(results => {
	console.log('==============================');
	console.log('   Current Weather (3 Cities)');
	console.log('==============================');
	results.forEach(result => {
		console.log(`City: ${result.name}`);
		console.log(`  Temperature: ${result.weather.temperature}°C`);
		console.log(`  Wind Speed:  ${result.weather.windspeed} km/h`);
		console.log(`  Weather Code: ${result.weather.weathercode}`);
		console.log(`  Time:        ${result.weather.time}`);
		console.log('------------------------------');
	});
	console.log('==============================');
}).catch(err => {
	console.error('Failed to fetch weather:', err);
});
