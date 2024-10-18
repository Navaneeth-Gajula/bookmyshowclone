import React, { useContext } from 'react';
import { MovieContext } from '../../context/Movie.context';
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi';

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
    <div className='text-gray-700 flex items-center justify-between'>
      <div>
      <h3 className='text-xl font-bold'>{movie.original_title}</h3>
      </div>
      <div className='w-8 h-8'>
        <BiShareAlt className='w-full h-full' />
      </div>
    </div>
    </>
  )
}

const NavLg = () => {
  return (
    <>
    <div className='container mx-auto px-4 flex items-center justify-between'>
      <div className='flex items-center w-1/2 gap-3'>
        <div className='w-10 h-10'>
          <img src='https://in.bmscdn.com/webin/common/icons/logo.svg' alt='logo' className='w-full h-full' />
        </div>
        <div className='w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md'>
          <BiSearch />
          <input type='search' className='w-full bg-transparent border-none focus:outline-none' placeholder='Search for movies, events, plays, sports and activities' />
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <span className='text-gray-200 text-xs flex items-center hover:text-white cursor-pointer'>
          Bengaluru <BiChevronDown />
        </span>
        <button className='bg-red-600 text-white text-sm rounded px-2 py-1'>
          Sign in
        </button>
        <div className='w-8 h-8 text-white'>
          <BiMenu className='w-full h-full' />
        </div>
      </div>
    </div>
    </>
  )
}



const MovieNavbar = () => {
  const { movie } =useContext(MovieContext);
  return (
    <>
    <nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
      <div className='md:hidden'>
        <NavSm />
      </div>
      <div className='hidden w-full lg:flex'>
        <NavLg />
      </div>
    </nav>
    </>
  )
}

export default MovieNavbar;