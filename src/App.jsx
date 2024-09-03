
import './App.css'
import Configpanel from './Reactcomponent/Configpanel'
import Navbar from './Reactcomponent/Navbar'
import VideoCard from './Reactcomponent/VideoCard'

function App() {
 
  return (
    <>
     <div className='flex-col p-8'>
      <Navbar/>
        <div className='bg-gray-400 w-[100%] h-[600px] p-4 mt-2 flex justify-around'>
          <VideoCard/>
          <Configpanel/>
        </div>
     </div>
    </>
  )
}

export default App
