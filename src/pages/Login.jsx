import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import siltentRewarding from "../images/siltentRewarding.jpg"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passVisibility, setPassVisibility] = useState(false)

    const navigate = useNavigate()

    function handlePasswordVisibility(){
        setPassVisibility(prevState => !prevState)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:8010/api/v1/auth/sign-in", {
            email,
            password
            })

            const {token, user} = res.data.data;

            // check if there is a token and a user
            if(!token || !user){
                throw new Error ("Missing user or token!");
            }

            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))

            console.log(res.data)
            navigate("/")
            
        }catch(error){
            console.log("Failed to login, Try again!", error)
            console.log("Status: ", error.response?.status)
        } 
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center m-5 sm:mt-20">
                <img src={siltentRewarding} 
                    className="w-full max-w-md lg:max-w-lg h-auto rounded-3xl"
                />
            
                {/* form container */}
                <div className="w-full lg:w-1/2 max-w-md">
                    {/* create account stuff */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold mb-3 text-center text-indigo-300">
                            Log <span className="text-pink-400 ">in</span>
                        </h1>

                        <p className="mb-10">
                            Don't have an account? 
                            <Link to="/register" className="text-indigo-300 underline">
                                Create an account
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}
                        className="flex flex-col p-5 rounded-2xl"
                    >
                        <input 
                            type="email" placeholder="Email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl mt-3"
                        />
                        <div className="relative">
                            <input 
                                type={passVisibility ? "text" : "password"} placeholder="Enter your password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                            Log in
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default Login