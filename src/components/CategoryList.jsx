import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../components/Loader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const CategoryList = ({category}) => {

    const [filteredData, setFilteredData] = useState([])
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {

        const fetchedData = async() => {
            try{
                setLoader(true)
                const endPoint = category.toLowerCase()
                const resp = await axios.get(`http://localhost:8010/api/v1/tutorials/categories/${endPoint}`)

                // console.log("Response from the API: " + resp)

                setFilteredData(resp.data.data.tutorials)

            }catch(error){
                console.log("Error occured while fetching data ", error)
            }finally{
                setLoader(false)
            }
        }

        if(category){
            fetchedData()
        }

    }, [category])

    return (
        <section className="p-20 mt-10">
            {loader ? 
                <div className="flex items-center justify-center">
                    <Loader />
                </div> :
                 filteredData.length === 0 ? 
                 <div className="flex flex-col items-center justify-center">
                    <p className="text-4xl">Nothing to be displayed...</p>
                    <p className="text-3xl">Try again!</p>
                </div> :
                 (<div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {filteredData.map((dataFiltered, index) => (
                        <div key={index}
                                className="bg-indigo-300 p-5 rounded-3xl">
                            <img className="w-full"
                                src={dataFiltered.image} alt="image" 
                            />
                            <h1 className="text-3xl font-bold mt-10">
                                {dataFiltered.title}
                            </h1>
                            <p className="font-sans text-[20px]">
                                {dataFiltered.description}
                            </p>
                            <div className="flex flex-col">
                                <a 
                                    href={dataFiltered.docLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mb-3 sm:mb-4"
                                >                 
                                    <p className="text-base sm:text-lg lg:text-xl">
                                        <FontAwesomeIcon icon={faNoteSticky}/>
                                        <span className="text-xl ml-2 hover:text-indigo-800 transition-colors">Documentation</span>
                                    </p>             
                                </a>   
                            
                                <a 
                                    href={dataFiltered.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                     className="mb-3 sm:mb-4"
                                >                 
                                    <p className="text-base sm:text-lg lg:text-x">
                                        <FontAwesomeIcon icon={faPlayCircle}/> 
                                        <span className="text-xl ml-2 hover:text-indigo-800 transition-colors">Video tutorial</span>
                                    </p>             
                                </a> 
                            </div>
                        </div>
                        ))}
                </div>)
                }
        </section>
    )
}

export default CategoryList