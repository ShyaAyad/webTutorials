import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Loader = () => {
  return (
    <DotLottieReact
      src="src/loader.json"
      loop
      autoplay
      className="w-52 h-52"
    />
  );
};

export default Loader