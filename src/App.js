import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Modules/CityComponent";
import WeatherComponent from "./Modules/WeatherComponent";
const API_KEY = "3942e63ed4bb44daa2b115515221802";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  width: 380px;
  font-family: Montserrat;
  backdrop-filter: blur(8px) saturate(200%);
  -webkit-backdrop-filter: blur(8px) saturate(200%);
  background-color: rgba(17, 25, 40, 0.13);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    updateWeather(response.data);
  };
  return (
    <>
      {" "}
      <Container>
        <AppLabel>The Weather App</AppLabel>
        {weather ? (
          <WeatherComponent weather={weather}/>
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    </>
  );
}

export default App;
