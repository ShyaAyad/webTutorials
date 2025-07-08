import TutorialList from "../components/TutorialList";
const Tutorials = ({tutorials}) => {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 px-2 sm:px-0">
          {
            tutorials.map((tutorial) => (
              <TutorialList key={tutorial._id} tutorial={tutorial}/>
            ))
          }
        </div>
    </>
  )
}

export default Tutorials