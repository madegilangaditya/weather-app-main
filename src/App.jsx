import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import brandLogo from './assets/images/logo.svg'
import iconUnits from './assets/images/icon-units.svg'
import iconDropdown from './assets/images/icon-dropdown.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container bg-orange-500">
          <div className="nav-wrap">
            <div className="logo-wrap">
              <a href="#">
                <img src={brandLogo} alt="logo" />
              </a>
            </div>
            <div className="dropdown-menu">
              <a href="#" className='dropdown-menu-link'>
                <div className="icon-wrap">
                  <img src={iconUnits} alt="" />
                  Units
                </div>
                <img src={iconDropdown} alt="" />
              </a>
              <ul className='dropdown-items'>
                <li><a href="#">Switch to imperial</a></li>
                <li>Temperature</li>
                <li><input type="radio" id="celcius" name="temperature" value="celcius" /><label for="celcius">Celsius (°C) </label></li>
                <li><input type="radio" id="fahrenheit" name="temperature" value="fahrenheit" /><label for="fahrenheit">Fahrenheit (°F) </label></li>
                <li>Wind Speed</li>
                <li><input type="radio" id="kmh" name="windspeed" value="kmh" /><label for="kmh">km/h </label></li>
                <li><input type="radio" id="mph" name="windspeed" value="fahrenheit" /><label for="mph">mph </label></li>
                <li>Precipitation</li>
                <li><input type="radio" id="mm" name="precipitation" value="mm" /><label for="mm">Millimeters (mm) </label></li>
                <li><input type="radio" id="in" name="precipitation" value="in" /><label for="in">Inches (in) </label></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className='header'>
        <div className="container">
          <h1>How's the sky looking today?</h1>
        </div>
      </section>
    </>
  )
}

export default App
