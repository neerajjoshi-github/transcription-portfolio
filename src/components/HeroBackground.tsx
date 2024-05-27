import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-16 left-4 sm:left-10 w-32"
      >
        <img src="/hero/hindi-hindi.png" alt="Hindi to Hindi Subtitles" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-16 right-4 sm:right-10 w-32"
      >
        <img
          src="/hero/english-english.png"
          alt="Englsih to Englsih Subtiles"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-10 md:bottom-20 left-4 md:left-40 w-40"
      >
        <img
          src="/hero/hindi-english.png"
          alt="Hindi to English Transcription"
        />
      </motion.div>
    </>
  );
};

export default HeroBackground;
