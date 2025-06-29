import { useEffect, useState } from "react"
import data from "/tutorial.json"

const CategoryList = ({category}) => {

    const [filteredData, setFilteredData] = useState([])
    
    useEffect(() => {
        // make sure to check when you use filter, it must be applied to an array so check the json file or the API output
        const filtered = data.tutorials.filter(item => item.category.toLowerCase() === category.toLowerCase())
        setFilteredData(filtered)
    }, [])

    return (
        <section className="p-20 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
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

                    <div className="flex justify-between">
                        <a href={dataFiltered.video}
                        target="_blank"
                        className="underline text-2xl"
                        >
                            Watch video
                        </a>
                        <a href={dataFiltered.docLink}
                        target="_blank"
                        className="underline text-2xl"
                        >
                            Read document
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryList