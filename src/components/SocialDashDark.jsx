import React from 'react'
import { Card } from "flowbite-react";

const SocialDashDark = () => {

  return (
    <div className='dark-bg h-[100vh]'>
        <div className='dark-top-bg rounded-2xl py-10 pb-32 mb-2 relative'>
            <div className='mx-44'>
                <div>
                    <p className='text-white text-2xl'>Social Media Dashboard</p>
                    <p className='dark-text'>Total Followers: 23,004</p>
                </div>
                
                <p className='dark-text flex justify-end'>Dark Mode</p>
            </div>
            
        </div>

        <div className='absolute bottom-16 mx-44'>
        <div className='grid grid-cols-4 gap-8 my-6 '>
            <Card className="max-w-sm dark-card-bg facebook-card-top text-center px-14">
                <h5 className="text-sm font-bold tracking-tight dark-text flex">
                    <img className=' pr-2' src="./src/assets/icon-facebook.svg" alt="facebook icon" />
                    @nathanf
                </h5>
                <p className="font-normal text-white text-5xl">
                    1987
                </p>
                <p className="font-normal dark-text">
                    FOLLOWERS                
                </p>
                <p className='text-xs text-green-400 flex'><img className='py-2 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />12 Today</p>
            </Card>

            <Card className="max-w-sm dark-card-bg twitter-card-top text-center">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-center">
                    <img className=' pr-2' src="./src/assets/icon-twitter.svg" alt="twitter icon" />
                    @nathanf
                </h5>
                <p className="font-normal text-white text-5xl">
                    1044
                </p>
                <p className="font-normal dark-text">
                    FOLLOWERS
                </p>
                <p className='text-xs text-green-400 flex justify-center'><img className='py-2 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />99 Today</p>
            </Card>

            <Card className="max-w-sm dark-card-bg instagram-card-top text-center">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-center">
                    <img className=' pr-2' src="./src/assets/icon-instagram.svg" alt="instagram icon" />
                    @realnathanf
                </h5>
                <p className="font-normal text-white text-5xl">
                    11k
                </p>
                <p className="font-normal dark-text">
                    FOLLOWERS
                </p>
                <p className='text-xs text-green-400 flex justify-center'><img className='py-2 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />1099 Today</p>
            </Card>

            <Card className="max-w-sm dark-card-bg youtube-card-top text-center">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-center">
                    <img className=' pr-2' src="./src/assets/icon-youtube.svg" alt="youtube icon" />
                    Nathan F.
                </h5>
                <p className="font-normal text-white text-5xl">
                    8239
                </p>
                <p className="font-normal dark-text">
                    SUBSCRIBERS
                </p>
                <p className='text-xs text-red-600 flex justify-center'><img className='py-2 px-2' src="./src/assets/icon-down.svg" alt="down arrow" />144 Today</p>
            </Card>
        </div>

        <p className='text-xl text-white mb-2'>Overview - Today</p>

        <div className='grid grid-cols-4 gap-6 '>
            <Card className="max-w-sm dark-card-bg border-none ">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Page Views
                    <img className=' pr-2' src="./src/assets/icon-facebook.svg" alt="facebook icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        87    
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />
                        <p className='text-xs text-green-400 flex self-center'>3%</p>
                    </div>
                    
                </div>
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Likes
                    <img className=' pr-2' src="./src/assets/icon-facebook.svg" alt="facebook icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        52
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-down.svg" alt="down arrow" />
                        <p className='text-xs text-red-600 flex self-center'>2%</p>
                    </div>
                </div>
                
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Likes
                    <img className=' pr-2' src="./src/assets/icon-instagram.svg" alt="instagram icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        5462
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />
                        <p className='text-xs text-green-400 flex self-center'>2257%</p>
                    </div>
                </div>
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Profile Views
                    <img className=' pr-2' src="./src/assets/icon-instagram.svg" alt="instagram icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        52k
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />
                        <p className='text-xs text-green-400 flex self-center'>1375%</p>
                    </div>
                </div>
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Retweets
                    <img className=' pr-2' src="./src/assets/icon-twitter.svg" alt="twitter icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        117
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />
                        <p className='text-xs text-green-400 flex self-center'>303%</p>
                    </div>
                </div>
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Likes
                    <img className=' pr-2' src="./src/assets/icon-twitter.svg" alt="twitter icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        507
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-up.svg" alt="up arrow" />
                        <p className='text-xs text-green-400 flex self-center'>553%</p>
                    </div>
                </div>
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Likes
                    <img className=' pr-2' src="./src/assets/icon-youtube.svg" alt="youtube icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        107
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-down.svg" alt="down arrow" />
                        <p className='text-xs text-red-600 flex self-center'>19%</p>
                    </div>
                </div>
                
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text flex justify-between">
                    Total Views
                    <img className=' pr-2' src="./src/assets/icon-youtube.svg" alt="youtube icon" />
                </h5>
                <div className='flex justify-between'>
                    <p className="font-normal text-white text-3xl">
                        1407
                    </p>
                    <div className='flex'>
                        <img className='py-4 px-2' src="./src/assets/icon-down.svg" alt="down arrow" />
                        <p className='text-xs text-red-600 flex self-center'>12%</p>
                    </div>
                </div>
                
            </Card>
        </div>
        </div>
        
        
    </div>
  )
}

export default SocialDashDark