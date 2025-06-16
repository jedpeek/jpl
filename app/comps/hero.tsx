import ContentfulImage from "@/lib/contentful-image";
import Image from "next/image";

function Hero() {
  return (
    <section className="text-white body-font font-bold text-shadow-lg p-4">
      <div className=" bg-[url('public/images/jpl_house.jpg')] bg-cover rounded p-2 ">
        <h2 className="drop-shadow-2xl  text-white mt-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          JedPeekLending.
        </h2>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full mb-8">
            <h1 className="drop-shadow-2xl title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-bold tracking-tighter leading-tight">
              Your Guide to Smarter Homeownership
            </h1>
            <p className="mb-8 leading-relaxed drop-shadow-2xl text-xl">
              Stay informed with expert insights on real estate trends, mortgage
              tips, and everything in between. Whether you're buying, selling,
              or simply planning ahead — we've got you covered.
            </p>
            <div className="flex justify-center">
              <a
                href="https://1416824.my1003app.com/779577/register"
                target="_blank"
              >
                <button className="inline-flex text-lg border text-white border-slate-300 rounded-2xl p-4 px-8 shadow-sm  text-center hover:bg-blue-900 hover:scale-105 duration-150">
                  Apply
                </button>
              </a>
              <a href="https://www.calendly.com/jedpeek" target="_blank">
                <button className="p-4 ml-4 text-lg text-white border  rounded-2xl p-4 shadow-sm  text-center hover:bg-slate-900 hover:scale-105 duration-150">
                  Schedule Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
