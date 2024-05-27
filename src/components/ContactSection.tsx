import {
  CircleCheckBig,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      data-section
      id="contact"
      className="min-h-[calc(100vh-48px)] py-6 lg:px-4 flex flex-col justify-center relative"
    >
      <h2 className="-z-[1] bg-half-gradient bg-clip-text text-transparent text-6xl sm:text-7xl md:text-9xl font-black mb-6 absolute top-14 left-1/2 -translate-x-1/2 w-full text-center ">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 lg:items-center justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold">Reach out</h2>
            <ArrowUpRight size={52} />
          </div>
          <p className="sm:text-sm text-zinc-300 max-w-sm font-semibold">
            Have a question or want to expand your audience today? Reach out to
            us for top-notch transcription and subtitling services. We're here
            to help you make your content accessible and engaging for everyone.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-4">
              <CircleCheckBig size={24} />
              <span className="text-sm md:text-base font-semibold">
                Best transcription and subtitles
              </span>
            </div>
            <div className="flex items-center gap-4">
              <CircleCheckBig size={24} />
              <span className="text-sm md:text-base font-semibold">
                Timely responses
              </span>
            </div>
            <div className="flex items-center gap-4">
              <CircleCheckBig size={24} />
              <span className="text-sm md:text-base font-semibold">
                Accurate and reliable services
              </span>
            </div>
            <div className="flex items-center gap-4">
              <CircleCheckBig size={24} />
              <span className="text-sm md:text-base font-semibold">
                Competitive pricing
              </span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      {/* Eamil Phone Location */}
      <div className="grid grid-cols-4 md:grid-cols-3 gap-4 mt-8">
        <div className="max-md:col-span-2 bg-shadow-gradient flex flex-col max-md:items-center max-md:text-center gap-1 rounded-lg border border-border p-3">
          <div className="bg-shadow-gradient border border-border rounded-lg p-2 w-fit mb-2">
            <Mail size={28} />
          </div>
          <span className="text-sm md:text-base">Email Us</span>
          <span className="text-xs md:text-sm text-zinc-200">
            hiteshpandey442@gmail.com
          </span>
        </div>
        <div className="max-md:col-span-2 bg-shadow-gradient flex flex-col max-md:items-center max-md:text-center gap-1 rounded-lg border border-border p-3">
          <div className="bg-shadow-gradient border border-border rounded-lg p-2 w-fit mb-2">
            <Phone size={28} />
          </div>
          <span className="text-sm md:text-base">Call Us</span>
          <span className="text-xs md:text-sm text-zinc-200">
            +917579109883
          </span>
        </div>
        <div className="max-md:col-span-4 bg-shadow-gradient flex flex-col max-md:items-center max-md:text-center  gap-1 rounded-lg border border-border p-3">
          <div className="bg-shadow-gradient border border-border rounded-lg p-2 w-fit mb-2">
            <MapPin size={28} />
          </div>
          <span className="text-sm md:text-base">Our Location</span>
          <span className="text-xs md:text-sm text-zinc-200">
            Someshawr, 263637, Almora, <br /> Uttarakhand, Inida
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
