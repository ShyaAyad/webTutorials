import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

  // handling the manu button clicking 
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className="flex items-center justify-center px-4">
      <div className='bg-white mt-6 sm:mt-10 p-2 sm:p-3 md:p-5 w-full max-w-xs 
                        sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-2xl sm:rounded-3xl md:rounded-4xl
                        min-h-16 sm:min-h-20 flex flex-col md:flex-row justify-between items-center shadow-lg relative'>
        
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/"
                className="bg-indigo-300 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center
                            justify-center rounded-full text-black text-lg sm:text-xl md:text-2xl lg:text-3xl 
                            font-bold hover:bg-indigo-400 transition-colors"> 
            Dev
          </Link>

          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >

            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        <nav className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3 lg:space-x-6 xl:space-x-10 w-full md:w-auto mt-4 md:mt-0 pb-4 md:pb-0`}>
          {/* we set the open to false once user clicks any of the links so the menu closes and takes user to the clicked link */}
          <Link onClick={() => setIsMenuOpen(false)}
                className="text-black text-base md:text-lg lg:text-xl xl:text-2xl hover:text-indigo-600 transition-colors font-medium">
            Home
          </Link>
          <Link to="/tutorial"
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-base md:text-lg lg:text-xl xl:text-2xl hover:text-indigo-600 transition-colors font-medium">
            Tutorials
          </Link>
          <Link to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-base md:text-lg lg:text-xl xl:text-2xl hover:text-indigo-600 transition-colors font-medium">
            About
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
