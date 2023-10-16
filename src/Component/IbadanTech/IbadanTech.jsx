// import React from 'react'

const IbadanTech = () => {
    return (
        <div className="mx-auto container mt-24 md:mt-40 lg:mt-[150px] mb-10">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full">
                    <img className="border-b-2 border-yellow-400 relative w-full mb-5 md:mb-0" 
                    src="/src/assets/ibdExpo.svg" alt="" />
                    <p className="text-[15px] lg:text-[18px] text-blue-700 font-medium lg;w-[600px] leading-5 md:my-6 
                    text-justify">
                    Welcome to Ibadan Tech Expo - a dynamic and vibrant gathering that celebrates the world of 
                    technology and innovation in Ibadan, Nigeria&apos;s largest city by landmass. The Ibadan Tech Expo 
                    aims
                    to create an inclusive and engaging environment that brings together a diverse community of tech 
                    enthusiasts, professionals, and stakeholders. Whether you&apos;re a seasoned industry veteran or a 
                    newcomer looking to explore the exciting possibilities of the tech scene, this event is tailor-made 
                    for you.
                    </p>
                </div>

                <div>
                    <img className="w-[1728px] md:h-[734px] md:top-[1129px] mt-5" src="/src/assets/Poster1.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default IbadanTech