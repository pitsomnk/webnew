import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Your Guide to a unique experience</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Your adventure starts now! We combine comfort and thrill to give you an unforgettable stay. Tucked away in a tranquil neighborhood, our cozy spot is ideal for a relaxing retreat or a lively escapade. Experience our exclusive art gallery, filled with mesmerizing works from the lucky sibiya studio!</p>
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