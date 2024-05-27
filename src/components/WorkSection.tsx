import TestimonialCard from "./TestimonialCard";

const WorkSection = () => {
  return (
    <section
      data-section
      id="work"
      className="w-full flex flex-col gap-6 lg:gap-0 items-center relative py-8"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black relative">
        <span className="relative">
          Work
          <span className="absolute bottom-0 right-0 w-3/4 h-[3px] bg-white"></span>
        </span>{" "}
        and{" "}
        <span className="relative">
          Testimonials
          <span className="absolute bottom-0 right-0 w-3/4 h-[3px] bg-white"></span>
        </span>
      </h2>
      <div className="lg:p-12 -z-[1] relative ">
        <div className="max-w-5xl [perspective:1000px] relative">
          <img
            src="/work/videos.png"
            alt=""
            className="w-full [transform:rotateX(15deg)_rotateY(0deg)]"
          />
          <div className="-z-[2] absolute top-0 left-0 w-1/2 rounded-full aspect-square bg-gradient-to-br from-[#003285]/80 to-[#874CCC]/80 blur-3xl "></div>
          <div className="-z-[2] absolute bottom-0 right-0 w-1/3 rounded-t-full aspect-square bg-gradient-to-br from-transparent to-[#FF407D] blur-3xl "></div>
        </div>
        <div className="absolute top-2 lg:top-16 left-2 lg:left-10 font-black flex flex-col gap-0 md:gap-3 items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-primary-gradient animate-gradient">
            60+
          </span>
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl">
            Videos
          </span>
        </div>
        <div className="absolute top-2 lg:top-16 right-2 lg:right-10 font-black flex flex-col gap-0 md:gap-3 items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-primary-gradient animate-gradient">
            30+
          </span>
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl">
            Hours
          </span>
        </div>
      </div>
      <p className="lg:-mt-8 lg:mb-8  text-xs sm:text-sm md:text-base text-center text-zinc-300 max-w-[720px]">
        I've transcribed and subtitled over 65 videos and more than 30 hours of
        diverse content. Each project represents a commitment to accuracy,
        clarity, and ensuring that every message is effectively communicated to
        the audience. It's been a pleasure to contribute to various projects and
        witness the impact of accessible content firsthand.
      </p>
      <TestimonialCard />
    </section>
  );
};

export default WorkSection;
