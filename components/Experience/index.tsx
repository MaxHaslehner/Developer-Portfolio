import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

interface ExperienceProps {
  company: string;
  title: string;
  logo?: string;
  date: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<{prop: ExperienceProps}> = ({prop}) => {
  return (
    <div>
        <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">{prop.company} /</span> {prop.title}
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            {prop.date}
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          {prop.description}
        </p>
        <div className="flex-col flex sm:flex-row ">
          {prop.technologies?.map((tech, index) => {
            return (
              <div
                key={index}
                className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC<{}> = () => {
  const experience: ExperienceProps[] = [
    {company: "LX-Media", title: "Web Developer Frontend", date: "From to then", description: "I was working bla bla bla", technologies: ["Next.js", "Shopify", "Storyblok", "Spryker"]},
    {company: "Rosenbauer", title: "Web Developer Full Stack", date: "From to then", description: "I was working bla bla bla", technologies: ["Angular", "Node.js", "SQL"]},
    {company: "X-Net Services", title: "Web Developer Frontend", date: "From to then", description: "I was working bla bla bla", technologies: ["Vue.js"]},
  ];
  return (
    <section id="experience" className={styles.wrapper}>
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      {experience?.map((obj, index) => {
        return <ExperienceCard prop={obj} key={index} />;
      })}
    </section>
  );
};

export default Experience;
