const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

export async function getWeatherByCity(city: string) {
  if (!API_KEY) {
    console.warn("Weather is unavailable: set EXPO_PUBLIC_OPENWEATHER_API_KEY in your local environment.");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) return null;
    const data = await response.json();
    if (!data?.main || !Array.isArray(data.weather) || !data.weather[0]) return null;
    return { temp: data.main.temp, description: data.weather[0].description };
  } catch (error) {
    console.log("Weather error:", error);
    return null;
  }
}
