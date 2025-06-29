import { useEffect, useState } from "react"
import TutorialCard from "./TutorialCard"
import { Link } from "react-router-dom"

const catagories = () => {

  const [category, setCategory] = useState([])

  useEffect(()=> {
    const fetchCatagoryData = async() => {
      const response = await fetch("http://localhost:5000/tutorials")
      const data = await response.json() 
      setCategory(data)
    }

    fetchCatagoryData() 
  } , [])

  return (
     <section className="py-4 mt-15">
          <div className="container-xl lg:container m-auto">
            <h1 className="text-3xl font-bold">Browse by catagories: </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-30 p-4 mt-5 rounded-lg">
              <TutorialCard>
                <Link to='/frontend'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src="/src/images/monetor-icon.png" alt="Frontend icon" />
                      <h1 className="text-black text-3xl font-bold">Frontend</h1>
                  </div>
                </Link>
              </TutorialCard>

              <TutorialCard>
                <Link to='/backend'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src="/src/images/database-icon.png" alt="Frontend icon" />
                      <h1 className="text-black text-3xl font-bold">Backend</h1>
                    </div>
                </Link>
              </TutorialCard>

              <TutorialCard>
                <Link to='/api'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src="/src/images/puzzle-icon.png" alt="Frontend icon" />
                      <h1 className="text-black text-3xl font-bold">APIs</h1>
                    </div>
                </Link>
              </TutorialCard>


              <TutorialCard>
                <Link to='/uiux'>
                    <div className="rounded-2xl p-8 bg-indigo-300 flex flex-col items-center">
                      <img className="w-30" src="/src/images/ui-ux-icon.png" alt="Frontend icon" />
                      <h1 className="text-black text-3xl font-bold">UI/UX</h1>
                    </div>
                </Link>
              </TutorialCard>
            </div>
          </div>
      </section>
  )
}

export default catagories