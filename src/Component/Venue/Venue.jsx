// import React from 'react'

const Venue = () => {
    return (
        <div className="bg-[#f5f5f5]" id="venue">
            <section className="container mx-auto">
                <section className="flex justify-between pt-3 text-blue-600 border-b-2 border-yellow-400">
                    <h1 className="sm:text-6xl lg:text-7xl font-extrabold">
                        Venue
                    </h1>
                </section>

                <div className="pt-2 lg:pt-12">
                    <div className="relative overflow-hidden">
                        <div className="flex">
                            <img className="min-w-[100%] min-h-[250px] object-cover rounded-lg" src="/src/assets/Venue-1-38edfbf0.png" alt="" width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Venue