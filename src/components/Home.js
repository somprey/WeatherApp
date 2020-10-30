import React, { useState, useEffect } from "react";
import axios from "axios";

function Home(props) {
  const [query, setQuery] = useState('Accra');
  const [weather, setWeather] = useState({});
  const [lastSearches, setLastSearches] = useState([])

const getWeather = () => {

      axios
      .post('http://localhost:4000/getWeather/'+query)
      .then((response) => {
        setWeather(response.data);
      });

     if (lastSearches.length<5 && lastSearches.indexOf(lastSearches)!==-1){
       setLastSearches( [...lastSearches, query])
     }
}

  const search = (e) => {
    e.preventDefault();
    getWeather()

  };
 
  useEffect( ()=> {
    getWeather()
  }, [1])

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
 
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <form>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              onChange={(event) => setQuery(event.target.value)}
              value={query}
              placeholder="Search..."
            />
          </div>
          <button type="submit" hidden={true} onClick={search}></button>
        </form>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp-273.15)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        
      </main>
    </div>
  );
}

export default Home;
