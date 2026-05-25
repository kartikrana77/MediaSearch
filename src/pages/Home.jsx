import Searchbar from '../components/Searchbar'
import Tabs from '../components/Tabs'
import ResutlGrid from '../components/ResutlGrid'

const Home = () => {
  return (
    <div className='sm:ml-24'>
      <Searchbar/>
      <Tabs />
      <ResutlGrid />
    </div>
  )
}

export default Home