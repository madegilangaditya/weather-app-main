import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import iconDropdown from '../assets/images/icon-dropdown.svg'
import iconSunny from '../assets/images/icon-sunny.webp'
import bgTodaySmall from '../assets/images/bg-today-small.svg'
import bgTodayLarge from '../assets/images/bg-today-large.svg'
import iconLoading from '../assets/images/icon-loading.svg'

const Main = () => {
    const [showDay, setShowDay] = useState(false)
    const locationQuery = useQuery({
      queryKey: ['location'],
      queryFn: async () => {
        const res = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=denpasar&count=1&language=en&format=json');
        return await res.json();
      },
    });

    // Extract data safely
    const locationData = locationQuery.data?.results?.[0]
    const latitude = locationData?.latitude;
    const longitude = locationData?.longitude;


    // 2️⃣ Second query: fetch weather, but only after first one succeeds
    const weatherQuery = useQuery({
      queryKey: ['weather', latitude, longitude],
      queryFn: async () => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&hourly=temperature_2m,relative_humidity_2m&current=temperature_2m,precipitation,weather_code,relative_humidity_2m,wind_speed_10m`, 

        );
        console.log('Weather load')
        return await res.json();
      },
      enabled: !!latitude && !!longitude,
      refetchOnWindowFocus: false,
    });

    // 3️⃣ Handle loading and errors
    const isAppLoading = locationQuery.isLoading || weatherQuery.isLoading;
    // if (locationQuery.isLoading) return <p>Loading location...</p>;
    // if (weatherQuery.isLoading) return <p>Loading weather...</p>;

    if (locationQuery.error) return <p>Error loading location</p>;
    if (weatherQuery.error) return <p>Error loading weather</p>;
    // const { isPending, error, data, isFetching } = useQuery({
    //   queryKey: ['weatherData'],
    //   queryFn: async () => {
    //     const response = await fetch(
    //       'https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&hourly=temperature_2m,relative_humidity_2m&current=temperature_2m,precipitation,weather_code,relative_humidity_2m,wind_speed_10m',
    //     )
    //     return await response.json()
    //   },
    // })
    // if (isPending) return 'Loading...'

    // if (error) return 'An error has occurred: ' + error.message
    

    return (
    <section className='main-content'>
        <div className="container lg:flex lg:gap-8">
          <div className='flex-1 w-full lg:max-w-[900px]'>
            <div className="main-weather-wrap grid gap-3.5 grid-cols-2 lg:grid-cols-4 mb-8">
              <div className={`grid-item highlighted rounded-3xl relative overflow-hidden col-span-2 lg:col-span-4 px-6 py-11 lg:min-h-[285px] ${isAppLoading ? 'bg-neutral-800' : ''}`}>
                {isAppLoading ? (
                  <div className='h-full flex flex-col justify-center items-center text-neutral-200'>
                    <img src={iconLoading} alt="" />
                    Loading...
                  </div>
                ):(
                  <>
                    <img src={bgTodayLarge} alt="" className='hidden lg:block absolute w-full h-full object-cover -z-10 top-0 left-0' />
                    <img src={bgTodaySmall} alt="" className='lg:hidden absolute w-full h-full object-cover -z-10 top-0 left-0' />
                    <div className="content-wrap lg:flex items-center justify-between lg:h-full">
                      <div className="title-wrap text-center lg:text-left text-white mb-6 lg:mb-0">
                        <h2 className='mb-4 lg:'>{locationData?.name}, {locationData?.country}</h2>
                        <p className='date text-neutral-300'>Tuesday, Aug 5, 2025</p>
                      </div>
                      <div className="weather-info flex items-center justify-center text-white">
                        <img src={iconSunny} alt="" srcSet="" className='w-24'/>
                        <span className='text text-8xl font-bold italic'>68°</span>
                      </div>
                    </div>
                  </>
                )}
                
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
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
                  <div className="degree-wrap flex justify-between items-center w-full">
                    <span>68°</span>
                    <span>57°</span>
                  </div>
                </div>
                <div className="forecast-item bg-neutral-800 flex flex-col justify-between gap-4 text-center rounded-xl text-white items-center px-2 py-4">
                  <p className='day'>Tue</p>
                  <img src={iconSunny} alt="" srcSet="" className='w-14' />
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
              <div onClick={() => setShowDay(!showDay)} className="day flex justify-between items-center gap-2 rounded-lg bg-neutral-700 px-4 py-1.5 text-sm cursor-pointer">Tuesday <img src={iconDropdown} alt="" srcSet="" /></div>
              <ul className={`day-items absolute bg-neutral-800 mt-2.5 w-full top-full border border-neutral-700 min-w-[213px] max-w-[213px] right-0 rounded-lg p-2 z-10 text-white ${!showDay ? 'hidden' : ''}`}>
                <li><input type="radio" className='hidden' id="Monday" name="day" value="Monday" /><label className='p-2 rounded-lg block w-full' htmlFor="Monday">Monday</label></li>
                <li><input type="radio" className='hidden' id="Tuesday" name="day" value="Tuesday" /><label className='p-2 rounded-lg block w-full' htmlFor="Tuesday">Tuesday </label></li>
                <li><input type="radio" className='hidden' id="Wednesday" name="day" value="Wednesday" /><label className='p-2 rounded-lg block w-full' htmlFor="Wednesday">Wednesday </label></li>
                <li><input type="radio" className='hidden' id="Thursday" name="day" value="Thursday" /><label className='p-2 rounded-lg block w-full' htmlFor="Thursday">Thursday </label></li>
                <li><input type="radio" className='hidden' id="Friday" name="day" value="Friday" /><label className='p-2 rounded-lg block w-full' htmlFor="Friday">Friday </label></li>
                <li><input type="radio" className='hidden' id="Saturday" name="day" value="Saturday" /><label className='p-2 rounded-lg block w-full' htmlFor="Saturday">Saturday </label></li>
                <li><input type="radio" className='hidden' id="Sunday" name="day" value="Sunday" /><label className='p-2 rounded-lg block w-full' htmlFor="Sunday">Sunday </label></li>
              </ul>
            </div>
            
            <div className="hourly-weather flex flex-col gap-4">
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7'/>
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
              <div className="weather-item bg-neutral-700 rounded-lg flex items-center justify-between px-3 py-5 text-white">
                <div className="time-wrap flex gap-4 items-center">
                  <img src={iconSunny} alt="" srcSet="" className='w-7' />
                  <span>3 PM</span>
                </div>
                <div className="degree">68°</div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}

export default Main