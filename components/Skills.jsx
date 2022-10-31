import Image from 'next/image'
import React from 'react'


export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>

            <h2 className='py-4'>What I can do</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/html.png'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>

                        </div>

                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/c-sharp.png'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>C#</h3>

                        </div>

                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/Java.jpg'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>

                        </div>

                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/javascript.jpg'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>

                        </div>

                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/react-logo.jpg'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>

                        </div>

                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/net.png'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>.Net</h3>

                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/wordpress.png'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>Wordpress</h3>

                        </div>

                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/css.svg.png'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>

                        </div>

                    </div>
                </div>


                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image    
                            src='/../public/skills/sql.png'
                            width='64'
                            height='64'
                            alt='/'       
                            />

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h3>SQL</h3>

                        </div>

                    </div>
                </div>

            </div>

        </div>



    </div>
  )
}
export default Skills