import { useState, useEffect } from "react";
import TutorialList from "../components/TutorialList";
import Loader from "../components/Loader"
import axios from "axios";

const Tutorials = () => {

  const [tutorials, setTutorials] = useState([]);
  const [loader, setLoader] = useState(false)

  // fetching tutorials from the backend 
    useEffect(() => {
    const browseTutorials = async() =>{
      try{
        setLoader(true)
        const res = await axios.get("http://localhost:8010/api/v1/tutorials")
        setTutorials(res.data.data.tutorials)
      }catch(error){
        console.log("Error occured while fetching data!", error)
      }finally{
        setLoader(false)
      }
    }
    browseTutorials()
  }, [])

  // useEffect(() => {
  //   const browsTutorials = async() => {
  //     try{
  //       const resp = await fetch("https://dev.to/api/articles?tag=tutorial")
  //       const data = await resp.json()
  //       setTutorials(data);
  //     }catch(error){
  //       console.log("Error while fetching data, Please try again!", error)
  //     }
  //   }
  //   browsTutorials();
  // }, [])

  return (
    <>
      {loader ? <div className="fixed inset-0 flex items-center justify-center"><Loader /></div> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 px-2 sm:px-0">
          {
            tutorials.map((tutorial) => (
              <TutorialList key={tutorial._id} tutorial={tutorial}/>
            ))
          }
        </div>
      )}
    </>
)
}

export default Tutorials