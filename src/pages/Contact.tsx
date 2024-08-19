export default function Contact() {
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
            back to you as soon as possible{" "}
          </span>
        </h2>
        <div className="w-full flex justify-center">
          <form
            action="#"
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
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
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
            <button type="submit" className="btn md:px-20 py-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
