import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">The Lucky Sibiya Studio</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        This remarkable artistic unique space, was the home of the ​late internationally renowned abstract painter and sculptor, ​Lucky Sibiya. With many amazing features to this space, ​from the architectural splendour, to the amazing art by the ​Lucky Sibiya and his private art collection on display. The ​space offers an exquisite Art Gallery experience playing on  ​the human senses.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            500+
            <span className="regular-16 lg:regular-20 ml-1">Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Book Now" 
            icon="/calendar.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>

      
      
    </section>
  )
}

export default Hero