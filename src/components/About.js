import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className=" text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusamus officiis veniam ab odit autem labore tempore hic, laborum
            officia ipsa blanditiis vitae ad. Reprehenderit facere nam est
            officiis omnis!
          </p>
          <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            <div className="border py-8 rounded-xl shadows-xl">
              <p className="text-6xl font-bold text-indigo-600">Completion</p>
              <p className="text-3xl text-gray-400 mt-2">24/7</p>
            </div>
            <div className="border py-8 rounded-xl shadows-xl">
              <p className="text-6xl font-bold text-indigo-600">Delivery</p>
              <p className="text-3xl text-gray-400 mt-2">100K</p>
            </div>

            <div className="border py-8 rounded-xl shadows-xl">
              <p className="text-6xl font-bold text-indigo-600">Transcation</p>
              <p className="text-3xl text-gray-400 mt-2">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
