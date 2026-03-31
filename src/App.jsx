
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './conponents/homePage/Banner'
import Players from './conponents/homePage/players/Players'
import Navbar from './conponents/Navbar'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async() => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error('Failed to fetch players data');
  }
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();

  const [coin, setCoin] = useState(10000000);

  return (
    <>
     <Navbar coin={coin} ></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
     <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin} ></Players>
     </Suspense>

{/* {?-- Toast Container for notifications --} */}
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
