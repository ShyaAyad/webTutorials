import {
  Route,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./pages/Home"
import Tutorials from "./pages/Tutorials"
import About from "./pages/About"
import Frontend from "./pages/Frontend"
import Backend from "./pages/Backend"
import API from "./pages/API"
import UIUX from "./pages/UIUX"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreateTutorials from "./pages/CreateTutorials"
import { useEffect, useState } from "react"
import axios from "axios"
import EditTutorial from "./EditTutorial"
import { loadTutorial } from "./components/TutorialList"


function App() {

  // lifting state up 
  const [tutorials, setTutorials] = useState([]);
  
  useEffect(() => {
    const fetchTutorials = async() => {
      try{
      //  setLoader(true)
        const res = await axios.get("http://localhost:8010/api/v1/tutorials")

          setTutorials(res.data.data.tutorials)
        }catch(error){
          console.log("Error occured while fetching data!", error)
        }/* finally{
          setLoader(false)
        } */
      }

    fetchTutorials()

  }, [])
  
  // getting the token 
  const token = localStorage.getItem("token")
  // methods for handling the tutorials 
  const createTutorial = async(tutorial) => {
    try{
      const res = await axios.post("http://localhost:8010/api/v1/tutorials", tutorial,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        console.log("Tutorial created: ", res.data.data)

        const newTutorial = res.data.data.tutorial

        // spreading the whole tutorials, and adding the new one to them 
        setTutorials((prevTutorial) => [...prevTutorial, newTutorial])
        return newTutorial
      
      }catch(error){
        console.log("Error occured while creating new tutorial, Try again!")
      }
  }

  // update a tutorial 
  const updateTutorial = async(tutorial) => {
    try{
      const res = await axios.patch(`http://localhost:8010/api/v1/tutorials/${tutorial._id}`, {
        title: tutorial.title,
        description: tutorial.description,
        image: tutorial.image,
        docLink: tutorial.docLink,
        video: tutorial.video
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("Updated tutorial: ", res.data)

    }catch(error){
      console.log("Error occured while updating data, Try again!")
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/tutorial" element={<Tutorials tutorials={tutorials}/>} />
          <Route path="/frontend" element={<Frontend category={"frontend"}/>} />
          <Route path="/backend" element={<Backend category={"backend"}/>} />
          <Route path="/api" element={<API category={"APIs"}/>} />
          <Route path="/uiux" element={<UIUX category={"UI/UX"}/>} />
          
          {/* passing the function to the component so that we can create a new tutorial */}
          <Route path="/createTutorial" element={<CreateTutorials addTutorial={createTutorial} />} />
          <Route path="/editTutorial/:id" element={<EditTutorial updateTutorial={updateTutorial} />} loader={loadTutorial} />
          <Route path="/about" element={<About />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App