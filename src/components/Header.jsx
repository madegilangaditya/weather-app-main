import React from 'react'
import { useState } from 'react'
import brandLogo from '../assets/images/logo.svg'
import iconUnits from '../assets/images/icon-units.svg'
import iconDropdown from '../assets/images/icon-dropdown.svg'

const Header = () => {
    
    const [showMenu, setShowMenu] = useState(false)

    return (
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
    )
}

export default Header