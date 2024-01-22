import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a versatile professional skilled in front-end development and
          graphic design, proficient in HTML, CSS, ReactJS, Bootstrap, and
          Tailwind CSS. As the Graphics Designing Head at my college, I lead
          design initiatives using Adobe Illustrator and Photoshop.
        </p>
        <br />
        <p className="text-xl">
          My expertise lies in seamlessly blending technical and artistic
          elements to create compelling digital experiences. I stay updated on
          industry trends through continuous learning, reflected in a portfolio
          showcasing the synergy between form and function.
        </p>
        <br />
        <p className="text-xl">
          Beyond coding and design, I thrive in collaborative environments,
          gaining fresh perspectives and insights. With a user-centric approach,
          I craft engaging interfaces that resonate on a profound level..
        </p>
        <br />
        <p className="text-xl">
          As a visionary in the digital realm, I am dedicated to the art of
          creation. Whether through lines of code or strokes of a digital brush,
          I am passionate about innovating and inspiring through my work.
        </p>
      </div>
    </div>
  );
};

export default About;
