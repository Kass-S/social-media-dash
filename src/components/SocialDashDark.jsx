import React from 'react'
import { Card } from "flowbite-react";

const SocialDashDark = () => {

  return (
    <div className='dark-bg h-[100vh]'>
        <div className='dark-top-bg rounded-2xl py-10 pb-32 relative'>
            <div className='mx-44'>
                <div>
                    <p className='text-white text-2xl'>Social Media Dashboard</p>
                    <p className='dark-text'>Total Followers: 23,004</p>
                </div>
                
                <p className='dark-text flex justify-end'>Dark Mode</p>
            </div>
            
        </div>

        <div className='absolute bottom-16 mx-44'>
        <div className='grid grid-cols-4 gap-6 my-6 '>
            <Card className="max-w-sm dark-card-bg facebook-card-top text-center px-10">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    @nathanf
                </h5>
                <p className="font-normal text-white text-5xl">
                    1987
                </p>
                <p className="font-normal dark-text">
                    FOLLOWERS                
                </p>
                <p className='text-xs text-green-400'>Today</p>
            </Card>

            <Card className="max-w-sm dark-card-bg twitter-card-top">
                <h5 className="text-sm font-bold tracking-tight dark-text ">
                    @nathanf
                </h5>
                <p className="font-normal text-white text-5xl">
                    1044
                </p>
                <p className="font-normal dark-text">
                    FOLLOWERS
                </p>
                <p className='text-xs text-green-400'>Today</p>
            </Card>

            <Card className="max-w-sm dark-card-bg instagram-card-top">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    @realnathanf
                </h5>
                <p className="font-normal text-white text-5xl">
                    11k
                </p>
                <p className="font-normal dark-text">
                    FOLLOWERS
                </p>
                <p className='text-xs text-green-400'>Today</p>
            </Card>

            <Card className="max-w-sm dark-card-bg youtube-card-top">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Nathan F.
                </h5>
                <p className="font-normal text-white text-5xl">
                    8239
                </p>
                <p className="font-normal dark-text">
                    SUBSCRIBERS
                </p>
                <p className='text-xs text-red-600'>Today</p>
            </Card>
        </div>

        <p className='text-xl text-white'>Overview - Today</p>

        <div className='grid grid-cols-4 gap-6 '>
            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Page Views
                </h5>
                <p className="font-normal text-white text-3xl">
                    87
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Likes
                </h5>
                <p className="font-normal text-white text-3xl">
                    52
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Likes
                </h5>
                <p className="font-normal text-white text-3xl">
                    5462
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Profile Views
                </h5>
                <p className="font-normal text-white text-3xl">
                    52k
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Retweets
                </h5>
                <p className="font-normal text-white text-3xl">
                    117
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Likes
                </h5>
                <p className="font-normal text-white text-3xl">
                    507
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Likes
                </h5>
                <p className="font-normal text-white text-3xl">
                    107
                </p>
            </Card>

            <Card className="max-w-sm dark-card-bg border-none">
                <h5 className="text-sm font-bold tracking-tight dark-text">
                    Total Views
                </h5>
                <p className="font-normal text-white text-3xl">
                    1407
                </p>
            </Card>
        </div>
        </div>
        
        
    </div>
  )
}

export default SocialDashDark