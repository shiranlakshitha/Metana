import React from 'react'
import welcomeVideo from '../assets/original-848c54b44182083599d62428e3ac9ad2 (1).mp4'
import introImgLight from '../assets/eacbd73be365c7aef3b53b74990292622932794c.png'

const Welcome = () => {
  return (
    <div className='flex w-[1180px] h-[680px] rounded-3xl shadow-2xl overflow-hidden'>
        <div className='flex flex-1/2 flex-col justify-between px-[40px] py-[64px]  '>
            <div className='flex flex-col '>
                <h1 className='text-[40px]'>Welcome to Sonola</h1>
                <p className='text-[20px] leading-[28px]'>With Sonola, making stand-out marketing content is as easy as a few clicks. Let’s get started!</p>
            </div>
            <div className='flex flex-col'>
                <div className='px-[16px]'>
                    <p className=' text-[18px] leading-[24px]'>63% of marketers say creating engaging content consistently is their biggest challenge.</p>
                    <p className=' text-[12px] leading-[24px]'>Content Marketing Institute, 2022</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex px-4 py-2'>
                       <div>1</div>  
                       <div>2</div>  
                       <div>3</div>  
                       <div>4</div>  
                       <div>5</div>  
                    </div>
                    <div>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-1/2 relative h-full'>
            <video src={welcomeVideo}
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            className='absolute inset-0 z-10 object-cover h-full bg-transparent'
            >

            </video>
            <img src={introImgLight} className='inset-0  z-20 opacity-80 object-cover ' alt="intro-img" />
        </div>
    </div>
  )
}

export default Welcome