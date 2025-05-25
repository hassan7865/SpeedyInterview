export const About = () => {
  return (
    <section className="max-w-screen-xl items-center sm:flex" id="about-us">
       
      <div className="p-10 sm:w-1/2">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png"></img>
        </div>
      </div>
      <div className="p-5 sm:w-1/2">
        <div className="text">
          <span className="border-b-2 border-indigo-600 uppercase text-gray-500">
            About us
          </span>
          <h2 className="my-4 text-3xl font-bold  sm:text-4xl ">
            What <span className="text-indigo-600">We Do</span>
          </h2>
          <p className="text-gray-700">
           At SpeedyIntervue, we are revolutionizing the technical hiring
                process with a cutting-edge AI-powered interview platform. Our
                solution blends AI-driven automation with human expertise,
                enabling tech companies, startups, and recruitment agencies to
                streamline hiring, reduce costs, and accelerate decision-making.
          </p>
        </div>
      </div>
    </section>
  
  );
};
