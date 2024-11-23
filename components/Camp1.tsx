import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-amber-500 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={68}
            height={68}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-3xl text-white">{title}</h4>
          <p className="regular-20 text-white">{subtitle}</p>
        </div>
      </div>

      
     </div>
    </div>
  )
}

const Camp1 = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          key="camp-1"
          backgroundImage="bg-bg-img-1"
          title="Pretoria ZA"
          subtitle="636 Asbestos Street, Elardus Park"
          peopleJoined="500+ Visited"
        />
        
      </div>

      
    </section>
  )
}

export default Camp1