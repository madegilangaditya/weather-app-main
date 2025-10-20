import { useState } from 'react'
import brandLogo from './assets/images/logo.svg'
import iconUnits from './assets/images/icon-units.svg'
import iconDropdown from './assets/images/icon-dropdown.svg'
import iconSunny from './assets/images/icon-sunny.webp'
import iconSearch from './assets/images/icon-search.svg'
import bgTodaySmall from './assets/images/bg-today-small.svg'

function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className="nav-wrap flex items-center py-4 justify-between">
            <div className="logo-wra max-w-[138px]">
              <a href="#">
                <img src={brandLogo} alt="logo" />
              </a>
            </div>
            <div className="dropdown-menu relative">
              <a href="#" className='dropdown-menu-link text-white flex justify-between items-center gap-2 rounded-lg bg-neutral-700 px-2 py-1.5 text-sm'>
                <div className="icon-wrap flex gap-1">
                  <img src={iconUnits} alt="" />
                  Units
                </div>
                <img src={iconDropdown} alt="" />
              </a>
              <ul className='dropdown-items hidden'>
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
      <section className='header mb-8'>
        <div className="container">
          <h1 className='text-center text-white my-8'>How's the sky looking today?</h1>
          <form action="">
            <div className="search-wrap relative mb-3">
              <img src={iconSearch} alt="" className='absolute left-[24px] top-5' />
              <input type="search" name="search" id="search" placeholder='Search for a place...' className='w-full px-6 pl-15 py-4 rounded-lg bg-neutral-800 text-neutral-200'/>
            </div>
            <button className='search w-full px-6 py-4 rounded-lg bg-blue-500 text-neutral-200 text-center'>Search</button>
          </form>
        </div>
      </section>
      <section className='main-content'>
        <div className="container">
          <div className="main-weather-wrap grid gap-3.5 grid-cols-2">
            <div className="grid-item highlighted rounded-3xl relative overflow-hidden col-span-2 px-6 py-11">
              <img src={bgTodaySmall} alt="" className='lg:hidden absolute w-full h-full object-cover -z-10 top-0 left-0' />
              <div className="content-wrap">
                <div className="title-wrap text-center text-white mb-6">
                  <h2 className='mb-4'>Berlin, Germany</h2>
                  <p className='date text-neutral-300'>Tuesday, Aug 5, 2025</p>
                </div>
                <div className="weather-info flex items-center justify-center text-white">
                  <img src={iconSunny} alt="" srcset="" className='w-24'/>
                  <span className='text text-8xl font-bold italic'>68°</span>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <h3>Feels Like</h3>
              <span>64°</span>
            </div>
            <div className="grid-item">
              <h3>Humidity</h3>
              <span>46%</span>
            </div>
            <div className="grid-item">
              <h3>Wind</h3>
              <span>9 mph</span>
            </div>
            <div className="grid-item">
              <h3>Precipitation</h3>
              <span>0 in</span>
            </div>
          </div>
          <div className="forecast">
            <h3>Daily forecast</h3>
            <div className="grid-wrap">
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
              <div className="forecast-item">
                <p className='day'>Tue</p>
                <img src={iconSunny} alt="" srcset="" />
                <div className="degree-wrap">
                  <span>68°</span>
                  <span>57°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hourly-forecast">
            <div className="title-wrap">
              <h3>Hourly forecast</h3>
              <div className="day">Tuesday</div>
            </div>
            <div className="hourly-weather">
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item">
                <div className="time-wrap">
                  <img src={iconSunny} alt="" srcset="" />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
