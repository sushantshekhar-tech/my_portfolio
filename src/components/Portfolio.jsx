import React from "react";
import calculator from "../assets/portfolio/calculator.jpg";
import college from "../assets/portfolio/college.jpg";
import creativity from "../assets/portfolio/creativity.jpg";
import netflix from "../assets/portfolio/netflix.jpg";
import todo from "../assets/portfolio/todo.jpg";
import weather from "../assets/portfolio/weather.jpg";
import quizapp from "../assets/portfolio/quizapp.jpg"

const Portfolio = () => {
  const myPortfolio = [
    {
      id: 1,
      src: netflix,
      demo: "https://netflixclone12-b4da8.web.app",
      code: "https://github.com/sushantshekhar-tech/Netflix_clone_Reactjs",
    },
    {
      id: 2,
      src: weather,
      demo: "https://weather-app1203.netlify.app",
      code: "https://github.com/sushantshekhar-tech/Weather_App_Reactjs",
    },
    {
      id: 3,
      src: creativity,
      demo: "https://sushantshekhar-tech.github.io/Creativity_unleashed.github.io/",
      code: "https://github.com/sushantshekhar-tech/Creativity_unleashed.github.io",
    },
    {
      id: 4,
      src: calculator,
      demo: "",
      code: "https://github.com/sushantshekhar-tech/Calculator_React",
    },
    {
      id: 5,
      src: college,
      demo: "https://sushantshekhar-tech.github.io/RVS_COLLEGE-OF-ENGINEERING_-_TECHNOLOGY./",
      code: "https://github.com/sushantshekhar-tech/RVS_COLLEGE-OF-ENGINEERING_-_TECHNOLOGY.",
    },
    
    {
      id: 6,
      src: quizapp,
      demo: "https://react-quiz-app1203.netlify.app",
      code: "https://github.com/sushantshekhar-tech/React-Quiz-App",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-[30rem] md:mt-0">
          <p
            className="text-4xl font-bold
                inline border-b-4 border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my Work out here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {myPortfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
