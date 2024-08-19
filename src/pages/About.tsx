const styles = {
  skill: "p-2 rounded-md bg-[#9993] text-[#666] font-bold text-center",
};
export default function About() {
  return (
    <section id="about" className="flex justify-center py-20 bg-[#fafafa]">
      <div className="container flex items-center flex-col px-4 md:px-0">
        <h2 className="flex flex-col justify-center items-center mb-10 md:mb-20">
          <span className="text-4xl md:text-5xl font-bold uppercase">
            About Me
          </span>
          <span className="w-6 h-1 bg-[#7843E9] rounded-lg my-5"></span>
          <span className="text-center md:text-xl md:w-2/3 text-[#555]">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Get to know me!</h3>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className=" text-[#555] md:text-lg">
                Hey! It's
                <strong> Mohamed Sayed </strong>
                and I'm a <strong> Frontend Web Developer </strong> located in
                Giza,Egypt. I've done
                <strong> remote </strong>
                projects for agencies, consulted for startups, and collaborated
                with talented people to create
                <strong> digital products </strong>
                for both business and consumer use.
              </p>
              <p className="text-[#555] md:text-lg">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Feel free to
                <strong> contact </strong> me here.
              </p>
            </div>
            <a href="#contact" className="btn w-max px-10 py-4">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              <div className={styles.skill}>JavaScript</div>
              <div className={styles.skill}>TypeScript</div>
              <div className={styles.skill}>React</div>
              <div className={styles.skill}>React Native</div>
              <div className={styles.skill}>Expo</div>
              <div className={styles.skill}>HTML</div>
              <div className={styles.skill}>CSS</div>
              <div className={styles.skill}>Tailwind CSS</div>
              <div className={styles.skill}>Bootstrap</div>
              {/* backend */}
              <div className=" col-span-full h-[2px] bg-[#666]"></div>
              <div className={styles.skill}>NodeJs</div>
              <div className={styles.skill}>Express JS</div>
              <div className={styles.skill}>MongoDB</div>
              <div className={styles.skill}>JWT</div>
              <div className={styles.skill}>RESTful APIs</div>
              <div className={styles.skill}>JSON</div>
              <div className={styles.skill}>AJAX</div>
              <div className={styles.skill}>XML</div>
              {/* Tools */}
              <div className=" col-span-full h-[2px] bg-[#666]"></div>
              <div className={styles.skill}>Git</div>
              <div className={styles.skill}>npm</div>
              <div className={styles.skill}>Postman</div>
              <div className={styles.skill}>Figma</div>
              <div className={styles.skill}>Adobe Illustrator</div>
              <div className={styles.skill}>Adobe Photoshop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
