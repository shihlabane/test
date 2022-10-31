
import Image from 'next/image';
import React from 'react'

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-6'>

        <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>I am very loving and kind person</p>
                <p className='py-2 text-gray-600'>
                    I enjoy listern to Good classic music on my spare time and works out
                </p>

                <p className='py-2 text-gray-600'>
                    NB: I enjoy working with different people because this helps me to learn more from others                </p>

                <p className='py-2 text-gray-600 underline cursor-pointer'>SOVTECH here I come!!!!!</p>

            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

                <Image className='rounded-xl' src="/../public/assets/ish.jpg" alt="/"  width='300' height='30'/>

            </div>

        </div>



    </div>
  );
};

export default About
