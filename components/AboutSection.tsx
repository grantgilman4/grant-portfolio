import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Node" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "REST API" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Agile" },
  { skill: "Linux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Grant and I am a{" "}
              <span className="font-bold">{"driven"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" passionate"}</span> Software Developer and Data Analyst
              based in Virginia.
            </p>
            <br />
            <p>
              I graduated from Arizona State University, in 2019
              with a BA focused in Marketing and IT. Recently I graduated from Virginia Tech&#39;s 
              Software Development Program.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From playing sports, trying new foods, to making rugs,
              I am always looking to learn new things and get involved in the community.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-orange-500">
                always be kind
              </span>{" "}
              and that&#39;s what I try to do everyday, I have a passion for
              technology and a desire to always push the limits of what is
              possible for my team and clients. I am excited for what&#39;s next and am
              currently open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
