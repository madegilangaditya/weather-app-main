import iconSearch from '../assets/images/icon-search.svg'

const Search = () => {
  return (
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
  )
}

export default Search