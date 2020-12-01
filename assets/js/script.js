const openWeather_API_KEY = "f8bf5237f511a457e122db3da908a016";
const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}";
const futureWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

// TODO: fetch currentWeather using City, ST from text box when user hits Search
// get long/lat from response
// TODO: fetch futureWeather using coordinate after currentWeather is fetched
// TODO: update info on screen

/** When the search button is clicked, fetch weather using city provided. */
$("#btn_search").click(function()
{
  let search = $("#input_search").val();
  if (search == "") // Force user to enter search.
  {
    window.alert("Please enter a city to search for.");
    return;
  }
});
