const TestimonialCard = () => {
  return (
    <div className="relative flex flex-col bg-shadow-gradient gap-3 sm:gap-4 md:gap-6 max-w-lg border-2 border-border rounded-lg p-3 sm:p-4">
      <img
        src="/icons/youtube.svg"
        alt="Youtube Icon"
        className="w-16 absolute top-4 right-4 rotate-12"
      />
      <div className="flex items-center gap-4">
        <div className="w-14 sm:w-16 aspect-square rounded-full bg-primary-gradient overflow-hidden">
          <img src="/work/anurag-singh.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-bold">Anurag Singh</span>
          <span className="text-sm sm:text-base text-zinc-300">@procodrr</span>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-zinc-300">
        Working with Hitesh has been an absolute pleasure. Their attention to
        detail and dedication to delivering high-quality transcriptions and
        subtitles is truly commendable. They consistently meet deadlines and go
        above and beyond to ensure client satisfaction. I highly recommend their
        services to anyone in need of reliable transcription and subtitling
        solutions.
      </p>
    </div>
  );
};

export default TestimonialCard;
