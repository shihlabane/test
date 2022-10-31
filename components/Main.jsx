
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome To My Site</p>
                <h1 className='py-4 text-gray-700'>
                    Hi,I'm <span className='text-[#5651e5]'> Ishmael</span></h1>
                <h1 className='py-2 text-gray-700'>

                    I'm a Software Developer

                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I have always been curious about Technology my whole life
                . This is why I decided to study computer system engineering so that I can learn more about Technology.
                I then discover software engineering which I fall inlove with, ever since then I have been learning and improving my software
                development skills so that I can be able to build robustic application to solver Business Challenges and make our live easy.

                <br/>
                I want to Join SOVTECH because it is the leading software development company in africa. I belive that I will be a great fit to the company by contributing in building modern web application,
                mobile appication and desktop application.My skills set and personality makes me great candidate for this position. 
                <br/>
                <br/>
                Kindly scroll down for more information
                
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Main
