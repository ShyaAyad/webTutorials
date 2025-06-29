const TutorialList = ({tutorial}) => {   
  return (     
    <section className="flex flex-col justify-between bg-indigo-300 p-3 sm:p-5 mt-8 sm:mt-16 rounded-lg min-h-[400px] sm:min-h-[500px] mx-2 sm:mx-0">         
      <div className="bg-indigo-300 p-3 sm:p-5 mt-3 sm:mt-5 rounded-lg">             
        <img 
          src={tutorial.social_image} 
          alt={tutorial.title}
          className="w-full h-auto rounded-lg mb-4 object-cover max-h-48 sm:max-h-64"
        />             
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-5 leading-tight">
          {tutorial.title}
        </h1>             
        <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-5 leading-relaxed">
          {tutorial.description}
        </p>             
        <a 
          href={tutorial.canonical_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-3 sm:mb-4"
        >                 
          <p className="underline text-base sm:text-lg lg:text-xl hover:text-indigo-800 transition-colors">
            Complete article
          </p>             
        </a>             
        <p className="text-base sm:text-lg lg:text-xl">                 
          <span className="font-bold">Genre: </span>                  
          {tutorial.tags}             
        </p>         
      </div>     
    </section>   
  ) 
}  

export default TutorialList