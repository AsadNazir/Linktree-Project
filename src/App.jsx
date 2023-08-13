// this is the main file of the project
import Star from './Component/Star'
import Profile from './Component/Profile'
import { useEffect, useState } from 'react'
import Loader from './Component/Loader';

function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loader
    setLoading(false);
    // Simulating a 2-second delay
  }, [])

  return (
    <>
      {isLoading ? <Loader /> :
        (<>
          <Star></Star>
          <Profile></Profile>
        </>
        )
      }

    </>
  )
}

export default App
