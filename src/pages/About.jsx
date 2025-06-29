import SpotlightCard from "../components/SpotlightCard ";

const About = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-white px-4 mt-20">
      <div className="rounded-2xl shadow-2xl max-w-2xl w-full p-8 ">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg mb-6">
                Welcome to our project! We are passionate developers creating high-quality software solutions. 
                Our mission is to deliver impactful and innovative products that make a difference.
              </p>
              <p className="text-base">
                This application is built with modern technologies, prioritizing performance, accessibility,
                and beautiful design. Feel free to explore and contribute to the project!
              </p>
          </SpotlightCard>
      </div>
    </div>
  );
};

export default About;
