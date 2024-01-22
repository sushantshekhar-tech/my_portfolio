import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
<div Name="Home" className='flex h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 '>
    <div className='max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl py-10 font-bold text-white  '>I'm a Front-End Developer | Graphics Designer</h2>
            <p className='text-gray-500 py-4 max-width-md'>A highly motivated and keen learner, with an optimistic mindset. Deals with problems practically and strategically. Looking for opportunities with a constant path to evolve and contribute to the organisation's growth in the process.
                Currently I love to work on web  application using technologies like React , Bootstrap , Tailswind , HTML5 , CSS and javaScript . 
                I love to make UI/UX designs , logo and vector potrait using Adobe PhotoShop and Adobe Illustrator


            </p>
            <div>
                <Link to='Portfolio' smooth duration={1000} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'></MdOutlineKeyboardArrowRight>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={heroImage} alt="My profile"  className='rounded-2xl mx-auto w-3/4 h-[80%] md:w-full ' />
        </div>
    </div>
</div>
  )
}

export default Home