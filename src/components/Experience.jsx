import React from "react";
import c from "../assets/c.png";
import cplus from "../assets/cplus.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import illustrotor from "../assets/illlustrator.png";
import javascript from "../assets/javascript.png";
import photoshop from "../assets/photoshop.png";
import react from "../assets/react.png";
import tailswind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import php  from "../assets/php.png"
import sql  from "../assets/mysql.png"

const Experience = () => {

const tech =[
    {
        id:1,
        src:html,
        title :"HTML",
        style:"shadow-orange-500"
    },
    {
        id:2,
        src:c,
        title :"C",
        style:"shadow-white"
    },
    {
        id:3,
        src:css,
        title :"CSS",
        style:"shadow-blue-500"
    },
    {
        id:4,
        src:javascript,
        title : "JavaScript",
        style:"shadow-yellow-500"
    },
    {
        id:5,
        src:photoshop,
        title : "Adobe Photoshop",
        style:"shadow-blue-500"
    },
    {
        id:6,
        src:bootstrap,
        title :"Bootstrap CSS",
        style:"shadow-orange-500"
    },
    {
        id:7,
        src:cplus,
        title :"C++",
        style:"shadow-sky-500"
    },
    {
        id:8,
        src:react,
        title :"React Js",
        style:"shadow-blue-500"
    },
    {
        id:9,
        src:tailswind,
        title :"Tailwind CSS",
        style:"shadow-sky-500"
    },
    {
        id:10,
        src:illustrotor,
        title :"Adobe Illustrator",
        style:"shadow-orange-500"
    },
    {
        id:11,
        src:github,
        title :"GitHub",
        style:"shadow-gray-500"
    },
    {
        id:12,
        src:php,
        title :"PHP",
        style:"shadow-red-500"
    },
    {
        id:13,
        src:sql,
        title :"MY SQL",
        style:"shadow-blue-500"
    },
]


  return (
    <div name="Experience" className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white ">
        <div className="sm:mt-50 sm:py-50">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline sm:my-10 mt-20">Experience</p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0">


{tech.map(({id,src,title,style})=>(

<div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg "+style}>
<img className="w-20 mx-auto" src={src} alt="images" />
<p className="mt-4">{title}</p>
</div>
))}

         


        </div>
      </div>
    </div>
  );
};

export default Experience;
