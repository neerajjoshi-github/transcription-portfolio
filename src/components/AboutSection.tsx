const AboutSection = () => {
  return (
    <section
      data-section
      id="about"
      className="flex flex-col lg:flex-row gap-8 sm:px-6 items-center justify-center relative"
    >
      <h2 className="lg:hidden text-4xl sm:text-5xl md:text-6xl font-black text-end relative w-full">
        Hello!! <br /> Everyone
      </h2>
      <div className="aspect-square flex items-center">
        <div className="w-fit h-fit p-3 pb-0 rounded-lg border-2 border-border overflow-hidden relative">
          <img
            src="/about/profile-image.png"
            alt="Profile Image"
            className="w-full lg:min-w-[400px] max-w-[350px] lg:max-w-[500px] drop-shadow-md"
          />
          <div className="w-[95%] h-[90%] overflow-hidden z-[-1] absolute rounded-xl bg-gradient-to-b from-[#1c1a1a] to-transparent top-24 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      <div className="lg:max-w-[650px] flex flex-col items-center lg:items-end gap-4 md:gap-6 xl:gap-8 relative">
        <div className="absolute z-[-1] w-44 aspect-square rounded-t-full rotation-animation blur-3xl bg-primary-gradient animate-gradient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="max-lg:hidden text-7xl font-black text-end  relative w-fit">
          Hello!! <br /> Everyone
        </h2>
        <p className="text-xs sm:text-sm md:text-base">
          I am Hitesh Pandey, I specialize in providing top-notch transcription
          and subtitling services tailored to meet your needs. With expertise in
          converting Hindi to English subtitles and vice versa, I ensure
          accuracy and clarity in every transcription project.
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          I offer specialized solutions for social media platforms like
          Instagram and YouTube. Whether you're a content creator, marketer, or
          business owner, I help enhance your online presence by providing
          high-quality subtitles and transcriptions for your videos. From catchy
          captions to accurate translations, I ensure your content resonates
          with your audience and drives engagement.
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          Trust me to deliver professional results that elevate your content and
          connect with a wider audience. Let's collaborate to bring your vision
          to life and make your content shine on every platform!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
