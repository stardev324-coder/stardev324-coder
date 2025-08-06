// import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            {/* Developer, Designer, Creator, Innovator */}
            Senior AI Engineer
          </h2>
          {/* <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24"> */}
          <div className="grid">
            {/* <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div> */}

            <div className="relative space-y-4">
              <p className="text-white">
              Senior AI Engineer and AI Specialist with hands-on experience building production grade AI applications using large language models, cloud ML and
data pipelines. Skilled in finetuning models building AI agents and deploying scalable solutions. I focus on clear communication, fast iterations and clean, maintainable code to bring your AI ideas to life.
</p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  {/* <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value.
                  </p> */}

                  {/* <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nazmul Hossain, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div>
                  </div> */}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
