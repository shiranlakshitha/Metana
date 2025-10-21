import React from 'react'
import welcomeVideo from '../assets/original-848c54b44182083599d62428e3ac9ad2 (1).mp4'
import introImgLight from '../assets/eacbd73be365c7aef3b53b74990292622932794c.png'

const Welcome = () => {
  return (
    <div className='flex w-[1180px] h-[680px] rounded-3xl shadow-2xl overflow-hidden'>
        <div className='flex flex-1/2 flex-col justify-between p-[20px]  '>
            <div className='flex flex-col'>
                <h1>Welcome to Sonola</h1>
                <p>With Sonola, making stand-out marketing content is as easy as a few clicks. Let’s get started!</p>
            </div>
            <div className='flex flex-col'>
                <div>
                    <p>63% of marketers say creating engaging content consistently is their biggest challenge.</p>
                </div>
                <div>
                    <div>
                       <div></div>  
                       <div></div>  
                       <div></div>  
                       <div></div>  
                       <div></div>  
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
            className='absolute inset-0 z-10 object-cover h-full'
            >

            </video>
            <img src={introImgLight} className='inset-0  z-20 opacity-70 object-cover' alt="intro-img" />
        </div>
    </div>
  )
}

export default Welcome