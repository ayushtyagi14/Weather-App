import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 0px;
  border-radius: 2px;
  color: black;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    background-color: rgba(245, 245, 245, 0.74);
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: #6EA5D5;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="./icon/perfect-day.png" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
