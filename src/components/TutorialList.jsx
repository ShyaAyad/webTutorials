import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle, faNoteSticky} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TutorialList = ({tutorial}) => {  

  // for getting the users role from the backend
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

const handleDelete = async (tutorialId) => {
  const confirm = window.confirm("Are you sure you want to delete this tutorial?")
  if (!confirm) return;

  try {
    await axios.delete(`http://localhost:8010/api/v1/tutorials/${tutorialId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    navigate("/tutorial");
  } catch (error) {
    console.log("Failed to delete tutorial", error);
  }
}

  return (     
    <section className="flex flex-col justify-between bg-indigo-300 p-3 sm:p-5 mt-8 sm:mt-16 rounded-lg min-h-[400px] sm:min-h-[500px] mx-2 sm:mx-0">         
      <div className="bg-indigo-300 p-3 sm:p-5 mt-3 sm:mt-5 rounded-lg">             
        <img 
          referrerPolicy="no-referrer" 
          src={tutorial.image} 
          alt={tutorial.title}
          className="w-full h-auto rounded-lg mb-4 object-cover max-h-72 sm:max-h-96"
        />             
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-5 leading-tight">
          {tutorial.title}
        </h1>             
        <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-5 leading-relaxed">
          {tutorial.description}
        </p>             
        
        <div className="flex flex-col">
          <a 
            href={tutorial.docLink}
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
            href={tutorial.video}
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

        {user?.role === "Admin" && (
          <div className="flex items-center justify-around mt-5">
          {/* For editing a tutorial with a specific id*/}
          <Link to={`/editTutorial/${tutorial._id}`}  
                className="block bg-red-700 hover:bg-red-600 transition-all duration-150 text-center p-2 rounded-xl font-bold"
          >
            Update Tutorial
          </Link>         

          {/* For deleting a tutorial with a specific id */}
          <button onClick={() => handleDelete(tutorial._id)}
                  className=" bg-blue-600 hover:bg-blue-800 transition-colors duration-150 text-center p-2 rounded-xl font-bold"
          >
            Delete tutorial
          </button>
        </div>)}
          
      </div>     
    </section>   
  ) 
}  

const loadTutorial = async({params}) => {
    const res = await axios.get(`http://localhost:8010/api/v1/tutorials/${params.id}`)
    return res.data.data.tutorial; 
}

export {TutorialList as default, loadTutorial}