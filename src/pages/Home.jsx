import Hero from '../components/Hero'
import Catagories from '../components/Catagories'
import BrowseTutorial from '../components/BrowseTutorial'
import ViewAll from '../components/ViewAll'

const Home = () => {
  return (
    <div>
        <Hero />
        <Catagories />
        <BrowseTutorial />
        <ViewAll />
    </div>
  )
}

export default Home