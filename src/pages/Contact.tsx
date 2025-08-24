import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      // 👉 Configure your EmailJS IDs here
      // Create a free account at https://www.emailjs.com/ then set:
      // 1) serviceId (e.g., "service_xxxxxx")
      // 2) templateId (e.g., "template_xxxxxx")
      // 3) publicKey (e.g., "YOUR_PUBLIC_KEY")
      const serviceId = "service_gq9txko";
      const templateId = "template_mm9x77p";
      const publicKey = "XQYhzy1iyG0f-lZff";

      // The form fields' `name` attributes should match your template variables in EmailJS
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatus("success");
      formRef.current.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(
        err?.text || err?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="flex justify-center py-20 bg-[#fafafa]">
      <div className="container flex items-center flex-col px-4 md:px-0">
        <h2 className="flex flex-col justify-center items-center mb-10 md:mb-20">
          <span className="text-4xl md:text-5xl font-bold uppercase">
            Contact
          </span>
          <span className="w-6 h-1 bg-[#7843E9] rounded-lg my-5"></span>
          <span className="text-center md:text-xl md:w-2/3 text-[#555]">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div className="w-full flex justify-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:w-2/3 flex flex-col gap-5 bg-white p-6 rounded-md shadow-lg"
          >
            <div className=" flex flex-col font-semibold gap-2 ">
              <label className="text-[#666]" htmlFor="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="bg-[#f0f0f0] font-semibold p-5 rounded-md"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col font-semibold gap-2 ">
              <label className="text-[#666]" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="bg-[#f0f0f0] font-semibold p-5 rounded-md"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col font-semibold gap-2 ">
              <label className="text-[#666]" htmlFor="message">
                Message
              </label>
              <textarea
                required
                cols={30}
                rows={8}
                className="bg-[#f0f0f0] font-semibold p-5 rounded-md"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn md:px-20 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="text-green-600 font-semibold">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold">
                Failed to send. {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
