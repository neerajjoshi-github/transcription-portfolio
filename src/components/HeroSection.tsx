import { Button } from "./Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      data-section
      className="relative flex flex-col text-center gap-8 items-center justify-center min-h-[calc(100vh-48px)] mt-12"
    >
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
      >
        Expand Your Reach with Accurate{" "}
        <span className="animate-gradient bg-primary-gradient text-transparent bg-clip-text">
          Transcriptions
        </span>{" "}
        and{" "}
        <span className="animate-gradient bg-primary-gradient text-transparent bg-clip-text">
          Subtitles
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="text-xs sm:text-sm md:text-base max-w-[800px] text-zinc-300"
      >
        Transform your Hindi content with seamless, accurate subtitles in
        English and Hindi. Elevate your videos with our expert transcription
        services, ensuring your message reaches a wider audience with clarity
        and precision. Let us help you bridge the language gap and make your
        content accessible to all.
      </motion.p>
      <Button
        size="lg"
        asChild
        className="font-bold text-base hover:-translate-y-1 transition duration-300 hover:shadow-2xl hover:shadow-[#a2009b]/70"
      >
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          href="#contact"
        >
          Transcribe Today
        </motion.a>
      </Button>
    </section>
  );
};

export default HeroSection;
