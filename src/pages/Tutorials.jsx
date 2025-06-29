import { useState, useEffect } from "react";
import TutorialList from "../components/TutorialList";

const Tutorials = () => {

  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const browsTutorials = async() => {
      try{
        const resp = await fetch("https://dev.to/api/articles?tag=tutorial")
        const data = await resp.json()
        setTutorials(data);
      }catch(error){
        console.log("Error while fetching data, Please try again!", error)
      }
    }
    browsTutorials();
  }, [])

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 px-2 sm:px-0">
    {tutorials.map((tutorial) => (
      <TutorialList key={tutorial.id} tutorial={tutorial}/>
    ))}
  </div>
)
}

export default Tutorials