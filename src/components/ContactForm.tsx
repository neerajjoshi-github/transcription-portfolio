import { Button } from "./Button";
import { RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Smile, Frown, LoaderCircle } from "lucide-react";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<"pending" | "submited" | null>(
    null
  );
  const [isError, setIsError] = useState(false);

  const form: RefObject<HTMLFormElement> = useRef(null);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setFormStatus("pending");
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      if (response.text !== "OK") {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setFormStatus("submited");
    }
  };

  const resetForm = () => {
    setFormStatus(null);
    setIsError(false);
    form.current?.reset();
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="relative backdrop-blur-sm bg-shadow-gradient flex flex-col gap-4 border-2 border-border rounded-lg p-2 sm:p-4 w-full lg:max-w-[550px]"
    >
      <AnimatePresence>
        {formStatus === "submited" && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col items-center gap-2  justify-center bg-black rounded-lg px-2 py-4"
          >
            <div
              className={cn(
                `flex-1 py-6 px-4 rounded-lg text-zinc-100`,
                isError ? "bg-red-500" : "bg-teal-600"
              )}
            >
              <div className="flex justify-between">
                <h4 className="text-4xl font-bold">
                  {isError ? "Opps!!" : "Success!!"}
                </h4>
                {isError ? (
                  <Frown className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                ) : (
                  <Smile className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                )}
              </div>
              <p className="text-base md:text-lg mt-6">
                {isError
                  ? "Sorry, there was an error processing your message. Please try again later or contact us directly."
                  : "Thank you for reaching out! Your message has been successfully received. We'll get back to you shortly."}
              </p>
            </div>
            <Button
              type="button"
              onClick={resetForm}
              variant="ghost"
              className={cn(
                `font-bold text-lg transition duration-200 p-0 underline`,
                isError
                  ? "text-red-500 hover:text-red-400"
                  : "text-teal-600 hover:text-teal-500"
              )}
            >
              {isError ? "Try Again" : "Send Another"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="gap-4 grid grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          required
          className="focus:outline-none focus-visible:border-zinc-500 border-2 border-transparent bg-[#232323] py-2 px-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          required
          className="focus:outline-none focus-visible:border-zinc-500 border-2 border-transparent bg-[#232323] py-2 px-3 rounded-md"
        />
      </div>
      <textarea
        name="message"
        id=""
        rows={6}
        required
        placeholder="Message"
        className="w-full focus:outline-none focus-visible:border-zinc-500 border-2 border-transparent bg-[#232323] py-2 px-3 rounded-md"
      ></textarea>

      <Button
        disabled={formStatus === "pending"}
        type="submit"
        className="text-base font-bold"
      >
        {formStatus === "pending" ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
