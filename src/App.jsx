import { useState } from 'react'
import brandLogo from './assets/images/logo.svg'
import iconUnits from './assets/images/icon-units.svg'
import iconDropdown from './assets/images/icon-dropdown.svg'
import iconSunny from './assets/images/icon-sunny.webp'
import iconSearch from './assets/images/icon-search.svg'
import bgTodaySmall from './assets/images/bg-today-small.svg'
import bgTodayLarge from './assets/images/bg-today-large.svg'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showDay, setShowDay] = useState(false)
 
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
              <a onClick={() => setShowMenu(!showMenu)} href="#" className='dropdown-menu-link text-white flex justify-between items-center gap-2 rounded-lg bg-neutral-700 px-2 py-1.5 text-sm'>
                <div className="icon-wrap flex gap-1">
                  <img src={iconUnits} alt="" />
                  Units
                </div>
                <img src={iconDropdown} alt="" />
              </a>
              <ul className={`dropdown-items absolute bg-neutral-800 mt-2.5 w-full min-w-[213px] max-w-[213px] right-0 rounded-lg p-2 z-10 text-white ${!showMenu ? 'hidden' : ''}`}>
                <li className='p-2'><a href="#">Switch to imperial</a></li>
                <li className='p-2 text-neutral-200 text-sm'>Temperature</li>
                <li><input type="radio" className='hidden' id="celcius" name="temperature" value="celcius" /><label className='p-2 rounded-lg block w-full' for="celcius">Celsius (°C) </label></li>
                <li><input type="radio" className='hidden' id="fahrenheit" name="temperature" value="fahrenheit" /><label className='p-2 rounded-lg block w-full' for="fahrenheit">Fahrenheit (°F) </label></li>
                <li className='p-2 text-neutral-200 text-sm'>Wind Speed</li>
                <li><input type="radio" className='hidden' id="kmh" name="windspeed" value="kmh" /><label className='p-2 rounded-lg block w-full' for="kmh">km/h </label></li>
                <li><input type="radio" className='hidden' id="mph" name="windspeed" value="fahrenheit" /><label className='p-2 rounded-lg block w-full' for="mph">mph </label></li>
                <li className='p-2 text-neutral-200 text-sm'>Precipitation</li>
                <li><input type="radio" className='hidden' id="mm" name="precipitation" value="mm" /><label className='p-2 rounded-lg block w-full' for="mm">Millimeters (mm) </label></li>
                <li><input type="radio" className='hidden' id="in" name="precipitation" value="in" /><label className='p-2 rounded-lg block w-full' for="in">Inches (in) </label></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className='header mb-8 lg:mb-17'>
        <div className="container">
          <h1 className='text-center text-white my-8 lg:my-16'>How's the sky looking today?</h1>
          <form action="" className='lg:flex lg:gap-4 items-center justify-center'>
            <div className="search-wrap relative mb-3 lg:mb-0 lg:w-full max-w-[525px]">
              <img src={iconSearch} alt="" className='absolute left-[24px] top-5' />
              <input type="search" name="search" id="search" placeholder='Search for a place...' className='w-full px-6 pl-15 py-4 rounded-lg bg-neutral-800 text-neutral-200'/>
            </div>
            <button className='search w-full lg:w-auto px-6 py-4 rounded-lg bg-blue-500 text-neutral-200 text-center'>Search</button>
          </form>
        </div>
      </section>
      <section className='main-content'>
        <div className="container lg:flex lg:gap-8">
          <div className='flex-1 w-full lg:max-w-[900px]'>
            <div className="main-weather-wrap grid gap-3.5 grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="grid-item highlighted rounded-3xl relative overflow-hidden col-span-2 lg:col-span-4 px-6 py-11">
                <img src={bgTodayLarge} alt="" className='hidden lg:block absolute w-full h-full object-cover -z-10 top-0 left-0' />
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
              <div className="grid-item p-4 rounded-2xl bg-neutral-800 text-neutral-200 flex flex-col gap-5">
                <h3 className='text-lg font-normal'>Feels Like</h3>
                <span className='text-3xl text-neutral-0'>64°</span>
              </div>
              <div className="grid-item p-4 rounded-2xl bg-neutral-800 text-neutral-200 flex flex-col gap-5">
                <h3 className='text-lg font-normal'>Humidity</h3>
                <span className='text-3xl text-neutral-0'>46%</span>
              </div>
              <div className="grid-item p-4 rounded-2xl bg-neutral-800 text-neutral-200 flex flex-col gap-5">
                <h3 className='text-lg font-normal'>Wind</h3>
                <span className='text-3xl text-neutral-0'>9 mph</span>
              </div>
              <div className="grid-item p-4 rounded-2xl bg-neutral-800 text-neutral-200 flex flex-col gap-5">
                <h3 className='text-lg font-normal'>Precipitation</h3>
                <span className='text-3xl text-neutral-0'>0 in</span>
              </div>
            </div>
            <div className="forecast mb-8">
              <h3 className='text-white text-xl font-semibold mb-5'>Daily forecast</h3>
              <div className="grid-wrap grid grid-cols-3 lg:grid-cols-7 gap-4">
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcset="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hourly-forecast bg-neutral-800 rounded-3xl px-4 py-5 mb-8 flex-1 lg:max-w-[383px]">
            <div className="title-wrap text-white flex justify-between items-center mb-4 relative">
              <h3 className='text-xl font-semibold'>Hourly forecast</h3>
              <div onClick={() => setShowDay(!showDay)} className="day flex justify-between items-center gap-2 rounded-lg bg-neutral-700 px-4 py-1.5 text-sm cursor-pointer">Tuesday <img src={iconDropdown} alt="" srcset="" /></div>
              <ul className={`day-items absolute bg-neutral-800 mt-2.5 w-full top-full border border-neutral-700 min-w-[213px] max-w-[213px] right-0 rounded-lg p-2 z-10 text-white ${!showDay ? 'hidden' : ''}`}>
                <li><input type="radio" className='hidden' id="Monday" name="day" value="Monday" /><label className='p-2 rounded-lg block w-full' for="Monday">Monday</label></li>
                <li><input type="radio" className='hidden' id="Tuesday" name="day" value="Tuesday" /><label className='p-2 rounded-lg block w-full' for="Tuesday">Tuesday </label></li>
                <li><input type="radio" className='hidden' id="Wednesday" name="day" value="Wednesday" /><label className='p-2 rounded-lg block w-full' for="Wednesday">Wednesday </label></li>
                <li><input type="radio" className='hidden' id="Thursday" name="day" value="Thursday" /><label className='p-2 rounded-lg block w-full' for="Thursday">Thursday </label></li>
                <li><input type="radio" className='hidden' id="Friday" name="day" value="Friday" /><label className='p-2 rounded-lg block w-full' for="Friday">Friday </label></li>
                <li><input type="radio" className='hidden' id="Saturday" name="day" value="Saturday" /><label className='p-2 rounded-lg block w-full' for="Saturday">Saturday </label></li>
                <li><input type="radio" className='hidden' id="Sunday" name="day" value="Sunday" /><label className='p-2 rounded-lg block w-full' for="Sunday">Sunday </label></li>
              </ul>
            </div>
            
            <div className="hourly-weather flex flex-col gap-4">
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7'/>
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcset="" className='w-7' />
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
