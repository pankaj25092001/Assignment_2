function get_chennai_weather(callback){
    const lat = 13.0827;
	const lon = 80.2707;
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    fetch(url)
        .then(res => res.json())
        .then(data => {callback(null,data.current_weather)})
        .catch(err => {callback(err,null)})
}
function show_weather(err,data){
    if(err){
        console.error("Error fetching weather data:", err);
    } else {
        console.log("Current weather in Chennai:", data.temperature);
        console.log("Weather condition:", data.weathercode);
        console.log("Wind speed:", data.windspeed);
        console.log("Humidity:", data.humidity);    
    }
}
get_chennai_weather(show_weather);