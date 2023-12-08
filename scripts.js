// API DOCUMENTS:
// https://rapidapi.com/foreca-ltd-foreca-ltd-default/api/foreca-weather/

function getWeatherForecast() {
    // This is the locationId for Sligo
    var locationId = '102961423';
    // This is the locationName for Sligo
    var locationName = "Sligo";

    // We need to set a few things here, to make sure our API works. Don't change these options, or you'll break it!
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ask-your-tech-lead-for-the-api-key',
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };

    // This is where we fetch the data from our API.
    // This is the API to call when you want to get the locationId for a place.
    // fetch('https://foreca-weather.p.rapidapi.com/location/search/' + locationName , options)
    // This is the API to call when you want to get the weather data for a locationId.
    fetch('https://foreca-weather.p.rapidapi.com/current/' + locationId + '?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en', options)
      .then(response => response.json())
      .then(data => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
      })
      .catch(error => console.error(error));
}