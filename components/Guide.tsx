import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Your Guide You to a memorable experience</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">In search of the perfect getaway? You've found it! Our unique blend of comfort and adventure promises an unforgettable experience. Located in a serene neighborhood, our welcoming home is ideal for a relaxing escape or an adventurous journey. Explore our on-site art gallery and be inspired by the beautiful collections on display.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/outside.jpg"
          alt="boat"
          width={1200}
          height={280}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  )
}

export default Guide