import { WobbleCard } from "./ui/wobble-card";

const WhySection = () => {
  return (
    <section className="flex flex-col gap-8 items-center py-14">
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
        Why{" "}
        <span className="relative">
          Choose
          <svg
            viewBox="0 0 200 100"
            className="absolute top-0 w-full left-0 -rotate-12 z-[-1]"
          >
            <ellipse
              cx="100"
              cy="50"
              rx="80"
              ry="40"
              className="fill-transparent stroke-pink-600 stroke-2"
            />
          </svg>
        </span>{" "}
        Us?
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#ed006a]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance font-bold text-lg md:text-xl lg:text-3xl tracking-[-0.015em] text-white">
              Accuracy
            </h2>
            <p className="text-xs sm:text-sm lg:text-base mt-4 text-left text-neutral-200">
              Accuracy is the cornerstone of our transcription service. With a
              keen eye for detail, we meticulously transcribe every word to
              ensure precision. Trust us to deliver flawless transcripts that
              capture the essence of your content with clarity and accuracy.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1">
          <h2 className="max-w-80 text-left text-balance font-bold text-lg md:text-xl lg:text-3xl tracking-[-0.015em] text-white">
            Interpretation
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-xs sm:text-sm lg:text-base text-neutral-200">
            Interpreting nuances requires finesse, and our team excels in this
            art. We go beyond mere translation, delving deep into context and
            tone to provide insightful interpretations. With our expertise, your
            message resonates authentically, bridging linguistic gaps
            effortlessly.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#6420aa]">
          <div className="">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance font-bold text-lg md:text-xl lg:text-3xl tracking-[-0.015em] text-white">
              Seamless Syncing
            </h2>
            <p className="mt-4 text-left text-xs sm:text-sm lg:text-base text-neutral-200">
              In the realm of audio and visual content, timing is everything.
              Our synchronization services ensure that every word matches
              perfectly with the corresponding frame, delivering a seamless
              viewing experience. With meticulous attention to detail, we
              synchronize audio, video, and subtitles flawlessly, enhancing the
              overall impact of your content.
            </p>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default WhySection;
