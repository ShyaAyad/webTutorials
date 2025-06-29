import { Link } from "react-router-dom"

const ViewAll = () => {
  return (
    <div className="flex items-center justify-center m-10">
      <Link to="/tutorial"
            className="bg-white text-2xl text-black rounded-2xl p-4">
        View all tutorials
      </Link>
    </div>
  )
}

export default ViewAll