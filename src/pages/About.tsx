// About.tsx
const styles: Record<string, string> = {
  chip: "p-2 rounded-md bg-[#9993] text-[#555] font-semibold text-center leading-none",
  divider: "col-span-full h-[2px] bg-[#e1e1e1] my-1",
  label:
    "col-span-full text-sm tracking-wider font-bold uppercase text-[#7843E9] mt-2",
};

export default function About() {
  return (
    <section id="about" className="flex justify-center py-20 bg-[#fafafa]">
      <div className="container flex items-center flex-col px-4 md:px-0">
        <h2 className="flex flex-col justify-center items-center mb-10 md:mb-20">
          <span className="text-4xl md:text-5xl font-bold uppercase">
            About Me
          </span>
          <span className="w-6 h-1 bg-[#7843E9] rounded-lg my-5" />
          <span className="text-center md:text-xl md:w-2/3 text-[#555]">
            A snapshot of who I am, what I build, and the technologies I use
            every day.
          </span>
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          {/* Left: Bio */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Get to know me!</h3>

            <div className="flex flex-col gap-3 md:gap-4 text-[#555] md:text-lg">
              <p>
                Hey! I’m <strong>Mohamed Sayed</strong>, a{" "}
                <strong>Full-Stack Developer</strong> based in{" "}
                <strong>Cairo, Egypt</strong>, collaborating remotely with teams
                in the UAE and beyond. I craft high-performance{" "}
                <strong>React/Next.js</strong> front-ends and build scalable{" "}
                <strong>Node/Express</strong> back-ends backed by both SQL and
                NoSQL datastores.
              </p>
            </div>

            <a href="#contact" className="btn w-max px-10 py-4">
              Contact
            </a>
          </div>

          {/* Right: Skills */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">My Skills</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {/* Frontend */}
              <div className={styles.label}>Frontend</div>
              <div className={styles.chip}>JavaScript (ES6+)</div>
              <div className={styles.chip}>TypeScript</div>
              <div className={styles.chip}>React</div>
              <div className={styles.chip}>Next.js (SSR)</div>
              <div className={styles.chip}>React Native</div>
              <div className={styles.chip}>Tailwind CSS</div>
              <div className={styles.chip}>Bootstrap</div>
              <div className={styles.chip}>Sass</div>
              <div className={styles.chip}>Framer Motion</div>
              <div className={styles.chip}>ApexCharts</div>
              <div className={styles.chip}>Redux Toolkit</div>
              <div className={styles.chip}>Context API</div>
              <div className={styles.chip}>Figma</div>
              <div className={styles.chip}>Adobe Photoshop</div>

              <div className={styles.divider} />

              {/* Backend */}
              <div className={styles.label}>Backend</div>
              <div className={styles.chip}>Node.js</div>
              <div className={styles.chip}>Express</div>
              <div className={styles.chip}>REST APIs</div>
              <div className={styles.chip}>Webhooks</div>
              <div className={styles.chip}>Socket.io</div>
              <div className={styles.chip}>JWT</div>
              <div className={styles.chip}>MongoDB</div>
              <div className={styles.chip}>Mongoose</div>
              <div className={styles.chip}>MySQL</div>
              <div className={styles.chip}>PostgreSQL</div>
              <div className={styles.chip}>SQLite</div>
              <div className={styles.chip}>Drizzle ORM</div>

              <div className={styles.divider} />

              {/* DevOps / Cloud & Tooling */}
              <div className={styles.label}>DevOps & Tooling</div>
              <div className={styles.chip}>Git/GitHub</div>
              <div className={styles.chip}>Vercel</div>
              <div className={styles.chip}>Nginx</div>
              <div className={styles.chip}>Linux VPS</div>
              <div className={styles.chip}>AWS S3</div>
              <div className={styles.chip}>Firebase</div>
              <div className={styles.chip}>Stripe</div>
              <div className={styles.chip}>OpenAI API</div>
              <div className={styles.chip}>Performance/SEO</div>
              <div className={styles.chip}>Webpack</div>
              <div className={styles.chip}>Vite</div>
              <div className={styles.chip}>Postman</div>
            </div>
          </div>
        </div>

        {/* Optional: Recent Projects mini-list (kept concise) */}
        <div className="w-full mt-14">
          <h3 className="text-2xl font-bold mb-4">Recent Projects</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-[#555]">
            <li className="p-4 rounded-lg bg-white shadow-sm">
              <span className="font-semibold">LiveInHotels</span> — Long-stay
              booking engine (Site, Admin, CRM, Backend) using React, Express,
              MongoDB.
            </li>
            <li className="p-4 rounded-lg bg-white shadow-sm">
              <span className="font-semibold">Xafora</span> — Multi-tenant
              WhatsApp SaaS with AI replies/chatbots using Next.js, Express,
              PostgreSQL.
            </li>
            <li className="p-4 rounded-lg bg-white shadow-sm">
              <span className="font-semibold">WeFinder</span> — Real-estate
              finder with 14K+ synced listings using Next.js, Express, MySQL.
            </li>
            <li className="p-4 rounded-lg bg-white shadow-sm">
              <span className="font-semibold">Booking Channel Manager</span> —
              Multi-tenant manager integrating Booking.com, Agoda, Airbnb with
              React, Express, PostgreSQL.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
