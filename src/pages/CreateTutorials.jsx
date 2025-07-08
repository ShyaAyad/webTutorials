import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CreateTutorials = ({addTutorial}) => {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [poster, setPoster] = useState("")
    const [description, setDescription] = useState("")
    const [document, setDocument] = useState("")
    const [video, setVideo] = useState("");

    const navigate = useNavigate();

    const handleCreatingTutorial = async(e) => {
        e.preventDefault();

        const newTutorial = {
            title,
            category,
            image: poster,
            description,
            docLink: document,
            video
        }

        console.log("Sending tutorial:", newTutorial);

        addTutorial(newTutorial)
        return navigate('/tutorial')
    }


    return (
        // main container
        <div className="min-h-screen py-4 px-4 md:py-8 w-full">
            <div className="sm:max-w-lg lg:max-w-3xl mx-auto">
        
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100">

                {/* header content  */}
                <div className="text-center my-4 md:my-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">Create new tutorial</h1>
                </div>
            
                
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <form onSubmit={handleCreatingTutorial}>
                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-black text-sm sm:text-base md:text-lg font-semibold">Title: </label>
                            <input type="text" placeholder="Write title of the tutorial"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="text-black w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl border-1 border-gray-600 placeholder:text-gray-700" 
                            />
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-sm sm:text-base md:text-lg font-semibold text-black">Category: </label>
                            <select value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl border-1 border-gray-600 bg-white text-black">
                                <option value="frontend" className="text-black">Frontend Development</option>
                                <option value="backend" className="text-black">Backend Development</option>
                                <option value="api" className="text-black">API Development</option>
                                <option value="uiux" className="text-black">UI/UX Design</option>
                            </select>
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-sm sm:text-base md:text-lg font-semibold text-black">Tutorial poster</label>
                            <input type="" placeholder="https://example.com/poster.png"
                                   value={poster}
                                   onChange={(e) => setPoster(e.target.value)}
                                    className="text-black w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl border-1 border-gray-600 placeholder:text-gray-700" 
                            />
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-sm sm:text-base md:text-lg font-semibold text-black">Description</label>
                            <textarea  
                                    className="text-black w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl border-1 border-gray-600 resize-none placeholder:text-gray-600" 
                                    rows="3 sm:rows-4" 
                                    placeholder="Write an eye catching description..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-sm sm:text-base md:text-lg font-semibold text-black">Documentation: </label>
                            <input 
                                className="text-black w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl border-1 border-gray-600 placeholder:text-gray-600" 
                                placeholder="https://documentLink.com/document"
                                value={document}
                                onChange={(e) => setDocument(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="block text-sm sm:text-base md:text-lg font-semibold text-black">Video Link:</label>
                            <input
                                placeholder="https://youtube.com/..."
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                                className="text-black w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-xl border-1 border-gray-600 placeholder:text-gray-600"
                            />
                        </div>


                        <div className="pt-2 sm:pt-4 flex items-center justify-center w-full">
                            <button 
                                className= "mt-5 p-4 rounded-xl bg-indigo-400 text-xl hover:bg-pink-400 transition-colors duration-300 w-full"
                            >
                                Create
                            </button>
                        </div>
                        
                        <Link  to="/tutorial"
                                className="text-gray-600 flex items-center justify-center font-bold mt-4">  
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-4"/>
                            Back to tutorials
                        </Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CreateTutorials