import React from "react";
import { workData } from "../static_data/workData";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workData.map(
            ({
              id,
              imageUrl,
              name,
              demoLink,
              demoButtonDisabled,
              codeLink,
              codeButtonDisabled,
            }) => (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={demoLink} target="_blank" rel="noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                        disabled={demoButtonDisabled}
                      >
                        Demo
                      </button>
                    </a>
                    <a href={codeLink} target="_blank" rel="noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                        disabled={codeButtonDisabled}
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
