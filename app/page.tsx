import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Slider from "@/components/Slider";
import Button from "@/components/Button";
import Camp1 from "@/components/Camp1";
import Slider1 from "@/components/Slider1";


export default function Home() {
  return (
    <div>
      <Camp1/>
      <Hero />
      <Slider1/>
      <Camp />
      <Guide />
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">A visiual adventure</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row py-10 pb-10">
        <Button 
            type="button" 
            title="Book Now" 
            icon="/calendar.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[468px] h-[368px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div className=" flex justify-center items-center bold-52 lg:bold-58">
        <h1 className="text-center">Explore our Gallery</h1>
      </div>
      <Slider />
    </div>
  );
}
