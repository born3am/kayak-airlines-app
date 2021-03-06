// Native Imports
import React, { useEffect, useState } from 'react';

// External Imports
import fetchJsonp from "fetch-jsonp";

// Internal Imports
import logo from './assets/img/Logo.svg';
import Airline from './components/Airline';

export default function App() {

  const [airlineCompanies, setAirlineCompanies] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchAirlines = () => {
      fetchJsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework?callback=jsonp', {
        jsonpCallback: 'jsonp',
      })
        .then(function (response) {
          return response.json()
        }).then(function (data) {
          // console.log('parsed json', data)
          setAirlineCompanies(data)
        }).catch(function (ex) {
          console.log('parsing failed', ex)
        })
    }
    fetchAirlines()
  }, []);

  // console.log('=============AIRLINES=======================');
  // console.log('airlineCompanies', airlineCompanies);
  // console.log('====================================');

  const handleCheckbox = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    } else {
      setFilters(filters.filter(item => item !== filter));
    }
  };

  return (
    <>
      <header className="App-header">
        <img src={logo} className="kayak-logo" alt="logo" />
      </header>
      <div className='Airlines-container'>
        <h1>Airlines</h1>
        <h2>Filter by Alliances</h2>
        <ul className='Airlines-checkboxes-row' >
          <li>
            <input
              type="checkbox"
              value="OW"
              name="oneWorld"
              id="oneWorld"
              onChange={() => handleCheckbox("OW")}
              checked={filters.includes("OW")}
            />
            <label
              htmlFor="oneWorld"
            >
              OneWorld
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="ST"
              name="skyTeam"
              id="skyTeam"
              onChange={() => handleCheckbox("ST")}
              checked={filters.includes("ST")}
            />
            <label
              htmlFor="skyTeam"
            >
              Sky Team
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="SA"
              name="starAlliance"
              id="starAlliance"
              onChange={() => handleCheckbox("SA")}
              checked={filters.includes("SA")}
            />
            <label
              htmlFor="starAlliance"
            >
              Star Alliance
            </label>
          </li>
        </ul>
        <div className='Airlines-grid'>
          {airlineCompanies
            .filter((airline) => {
              return filters.length > 0 ?
                filters.includes(airline.alliance) :
                airline;
            })
            .map((airline, idx) => <Airline key={idx} airline={airline} />)
            // .slice(0, 10)
          }
        </div>
      </div>
    </>
  );
}

