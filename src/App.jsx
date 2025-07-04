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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* lets see it for now */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/tutorial" element={<Tutorials />} />
          <Route path="/frontend" element={<Frontend category={"frontend"}/>} />
          <Route path="/backend" element={<Backend category={"backend"}/>} />
          <Route path="/api" element={<API category={"APIs"}/>} />
          <Route path="/uiux" element={<UIUX category={"UI/UX"}/>} />
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