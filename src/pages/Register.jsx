import { Link } from "react-router-dom"

const Register = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        // main container
        <div className="flex flex-col sm:flex-row items-center justify-center m-5 sm:mt-20">
            <img src="src/images/beBraveBg.jpg" 
                 className="w-full max-w-md lg:max-w-lg h-auto rounded-3xl"
            />
        
            {/* form container */}
            <div className="w-full lg:w-1/2 max-w-md">
                {/* create account stuff */}
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl mb-3 text-center text-indigo-300">
                        Create an account
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
                        className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl"
                    />
                    <input 
                        type="email" placeholder="Email"
                        className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl mt-3"
                    />
                    <input 
                        type="password" placeholder="Enter your password"
                        className="bg-amber-50 text-gray-900 w-full p-3 rounded-xl mt-3"
                    />
                    <button className= "mt-5 p-4 rounded-xl bg-indigo-300 text-xl hover:bg-pink-400 transition-colors duration-300">
                        Create account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register