import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Header = () => {

  const {userData} = useContext(AppContext);

  return (
    <div className= 'flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      
      {/* Profile / Header Image */}
      <img
        src={assets.header_img}
        alt="Profile"
        className="w-36 h-36 rounded-full mb-6"
      />

      {/* Greeting */}
      <h1 className='flex items-center gap-2 text-xl sm:text-3xl
      font-medium mb-2'> Hey {userData ? userData.name : 'Developer'}!
      <img className='w-8 aspect-square' src={assets.hand_wave} alt="" /> 
      </h1>
    

      <h2 className='text-3xl sm:txt-5xl font-semibold mb-4'>Welcome to our App</h2>
      {/* Optional subtitle */}
      <p className="mb-8 max-w-md">
       Let's Start with a quick Product tour and  we will have you up and running in no time!
      </p>
      <button className='border border-gray-500 rounded-full px8 py-2.5 hover:bg-gray-100 transition-all'>
         Get Started</button>

    </div>
  )
}

export default Header
