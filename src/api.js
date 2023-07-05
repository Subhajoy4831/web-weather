export const geoApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const weatherApiURL = "https://api.openweathermap.org/data/2.5";
export const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
