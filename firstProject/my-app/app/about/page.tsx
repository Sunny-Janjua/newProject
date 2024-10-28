import Image from "next/image";
import Link from "next/link";
import VerticalTimelinePage from "@/app/components/timeline"

const About = () => {
  return (
    <>
      <section className="pt-24 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 sm:pt-32 md:pt-40 2xl:pt-48">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl animate-pulse">
                Hey 👋 I am
                <br className="block sm:hidden" /> Sunny Janjua
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Hey there! 👋 I am Hussnain Mulazam, a student of Information
                Technology (BSIT), with a passion for AI, Data Science, and web
                development. I created 'Code with Sunny' to teach web
                development skills like HTML, CSS, JavaScript, React, and
                Next.js. Currently, I'm building projects like a social media
                app and an e-commerce site, and I offer WordPress development
                gigs on Fiverr. When not coding, I enjoy traveling and making
                chai. Let’s connect and grow together! 🚀
              </p>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <Link
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Twitter
                </Link>
              </p>
            </div>

            <div
              className="relative flex justify-center items-center"
              style={{ height: "100vh" }}
            >
              <div className="relative group transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
                <Image
                  className="rounded-lg shadow-lg group-hover:shadow-2xl"
                  src="/new.png"
                  alt="Sunny Janjua"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl mb-8 animate-pulse">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp">
            <div className="space-y-4">
              {[
                { skill: "HTML", percentage: 90 },
                { skill: "CSS & Tailwind CSS", percentage: 80 },
                { skill: "JavaScript", percentage: 70 },
                { skill: "Python", percentage: 70 },
                { skill: "C++", percentage: 80 },
                { skill: "TypeScript", percentage: 80 },
              ].map(({ skill, percentage }) => (
                <div key={skill}>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill}</h3>
                  <div className="relative w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-1 overflow-hidden">
                    <div
                      className="bg-teal-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                      title={`${skill}: ${percentage}%`} // Tooltip on hover
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { skill: "React Js", percentage: 85 },
                { skill: "Next Js", percentage: 75 },
                { skill: "Node Js", percentage: 70 },
                { skill: "Express Js", percentage: 70 },
                { skill: "MongoDB", percentage: 65 },
                { skill: "SQL", percentage: 80 },
              ].map(({ skill, percentage }) => (
                <div key={skill}>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill}</h3>
                  <div className="relative w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-1 overflow-hidden">
                    <div
                      className="bg-teal-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                      title={`${skill}: ${percentage}%`} // Tooltip on hover
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <VerticalTimelinePage/>
    </>
  );
};

export default About;
