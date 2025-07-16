import { useEffect, useState } from "react"
import TutorialCard from "./TutorialCard"
import { Link } from "react-router-dom"
import axios from "axios"
import monitorIcon from "../images/monetor-icon.png";
import databaseIcon from "../images/database-icon.png";
import puzzleIcon from "../images/puzzle-icon.png";
import uiuxIcon from "../images/ui-ux-icon.png";


const Catagories = () => {

  const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchTutorials = async() => {
          try{
            const res = await axios.get("http://localhost:8010/api/v1/tutorials")
            setCategory(res.data.data.tutorials)
          }catch(error){
            console.error("Error occured while fetching data!")
          }
        }
      
      fetchTutorials()
  }, [])

  return (
     <section className="py-4 mt-15">
          <div className="container-xl lg:container m-auto">
            <h1 className="text-3xl font-bold">Browse by catagories: </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-30 p-4 mt-5 rounded-lg">
              <TutorialCard>
                <Link to='/frontend'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src={monitorIcon} alt="Frontend icon" />
                      <h1 className="text-black text-3xl font-bold">Frontend</h1>
                    </div>
                </Link>
              </TutorialCard>

              <TutorialCard>
                <Link to='/backend'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src={databaseIcon} alt="Backend icon" />
                      <h1 className="text-black text-3xl font-bold">Backend</h1>
                    </div>
                </Link>
              </TutorialCard>

              <TutorialCard>
                <Link to='/api'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src={puzzleIcon} alt="API icon" />
                      <h1 className="text-black text-3xl font-bold">APIs</h1>
                    </div>
                </Link>
              </TutorialCard>


              <TutorialCard>
                <Link to='/uiux'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src={uiuxIcon} alt="UIUX icon" />
                      <h1 className="text-black text-3xl font-bold">UI/UX</h1>
                    </div>
                </Link>
              </TutorialCard>
            </div>
          </div>
      </section>
  )
}

export default Catagories
