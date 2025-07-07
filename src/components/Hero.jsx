import BlurText from "./BlurText";

const Hero = () => {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="flex flex-col items-center justify-center ml-10 mt-20">
      <BlurText
        text="Explore Tutorials, Find what you want"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-6xl mb-8"
      />  
    </div>
  )
}

export default Hero