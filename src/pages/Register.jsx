import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import beBraveBg from "../images/beBraveBg.jpg";

const Register = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [passVisibility, setPassVisibility] = useState(false)

    function handlePasswordVisibility(){
        setPassVisibility(prevState => !prevState)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const res = await axios.post("http://localhost:8010/api/v1/auth/sign-up", {
                fullName,
                email,
                password
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            })

            // getting the token from the backend
            const token = res.data.token;

            // check if there is a token
            if(!token){
                throw new Error ("You need to have an account");
            }

            // if so then store it: there are a lot of ways for storing it bas this is the best practice for our small project ig :)
            localStorage.setItem("token", token);

            console.log(res.data)
            navigate("/")
        }catch(error){

            console.log("Error status: ", error.response?.status)
            console.log("Error occured: ", error)
        }
    }

    return (
        // main container
        <div className="flex flex-col sm:flex-row items-center justify-center m-5 sm:mt-20">
            <img src={beBraveBg}
                 className="w-full max-w-md lg:max-w-lg h-auto rounded-3xl"
            />
        
            {/* form container */}
            <div className="w-full lg:w-1/2 max-w-md">
                {/* create account stuff */}
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold mb-3 text-center text-indigo-300">
                        Create <span className="text-rose-400"> an </span> account
                    </h1>

                    <p className="mb-10">
                        Already have an account? 
                        <Link to="/login" className="text-indigo-300 underline">
                            Log in
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit}
                    className="flex flex-col p-5 rounded-2xl"
                >
                    <input 
                        type="text" placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        autoComplete="off"
                        required
                        className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl"
                    />
                    <input 
                        type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                        className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl mt-3"
                    />
                    <div className="relative">
                        <input 
                        type={passVisibility ? "text" : "password"} placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        required
                        className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl mt-3"
                        />
                        <span className="absolute pt-3 right-3 top-1/2 transform -translate-y-1/2 text-gray-800">
                            <FontAwesomeIcon icon={passVisibility? faEye : faEyeSlash}
                                             onClick={handlePasswordVisibility}
                            />
                        </span>
                    </div>
                    <button type="submit"
                            className= "mt-5 p-4 rounded-xl bg-indigo-300 text-xl hover:bg-pink-400 transition-colors duration-300">
                        Create account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register