import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the Form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/efbbcfbf-d0ba-442f-b02f-a36352a43edf" method='POST' className='flex flex-col w-full md:w-1/2 '>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder='Enter your E-mail' className='p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none'/>
                    <textarea name="message"  rows="10" placeholder='Enter Your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300
                    '>Let's Talk</button>

                </form>
            </div>
        </div>

        <div>
        <div className='bg-black w-full text-white flex justify-center item-center' >
            <p className='font-bold my-auto'>Designed and developed by Sushant Shekhar . </p>
            <p>Portfoliio @copyright 2024</p>
        </div>
    </div>
    </div>
  )
}

export default Contact