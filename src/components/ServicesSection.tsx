import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const ServicesSection = () => {
  return (
    <section className="py-8 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center">
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
        <span className="relative">
          Services
          <span className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-primary-gradient"></span>
        </span>{" "}
        We{" "}
        <span className="relative">
          Provide
          <span className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-primary-gradient"></span>
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1080px]">
        <CardContainer className="inter-var max-md:max-w-[450px]">
          <CardBody className="w-full h-auto bg-primary-gradient animate-gradient relative group/card rounded-lg gap-4 px-2 py-6 text-center flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-xl md:text-2xl lg:text-4xl font-black"
            >
              Transcription
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-xs sm:text-sm lg:text-base"
            >
              We offer professional transcription services, converting Hindi
              (हिन्दी) audio and video content into accurate and polished
              English text. Our expertise ensures that your message is conveyed
              clearly and effectively, bridging language barriers and reaching a
              broader audience.
            </CardItem>
            <CardItem translateZ="100" className="w-full">
              <img src="/services/transcription.png" alt="Transcription" />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var max-md:max-w-[450px]">
          <CardBody className="w-full h-auto bg-primary-gradient animate-gradient relative group/card rounded-lg gap-4 px-2 py-6 text-center flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-xl md:text-2xl lg:text-4xl font-black"
            >
              Subtitles
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-xs sm:text-sm lg:text-base"
            >
              We specialize in providing high-quality English and Hindi
              subtitles for your content. Whether it's for videos, social media
              posts, or any multimedia project, our subtitle services ensure
              your message is accessible and engaging to a diverse audience
            </CardItem>
            <CardItem translateZ="100" className="w-full">
              <img src="/services/subtitle.png" alt="Subtitle" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
