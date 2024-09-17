import { LeadForm } from '@/components/lead'
import { Separator } from '../ui/separator'

export default function Hero() {
    return (
        <section
        id="lead"
        className="w-full py-8 relative before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0.637),rgba(0,0,0,0.7))] before:pointer-events-none before:z-10 before:overflow-hidden"
        style={{
          backgroundImage:
            "url('https://www.marylandinstitute.org/assets/home-erRiSXzt.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="z-20 lg:w-2/3">
            <div className="max-w-lg mx-auto lg:mx-0 mb-8 text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl mb-4 text-white font-bold">
                Transform Hearts and Minds with{" "}
                <span className="text-cyan-500">Quranic Teachings- </span>
                Enroll Now for Lifelong Blessings.
              </h1>
              <h4 className='text-lg text-gray-300'>
                Maryland and provide online instruction to learners worldwide.
              </h4>
            </div>
          </div>

          <div className="z-20 lg:w-1/3 mb-12 lg:mb-0">
          <div className='bg-white rounded-md p-4 shadow space-y-3'>
            <h2 className='text-center font-bold'>Register Now</h2>
            <Separator className='w-1/2 mx-auto' />
            <LeadForm />
          </div>

          </div>
        </div>
      </section>
    )
}