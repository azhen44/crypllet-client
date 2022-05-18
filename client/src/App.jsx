import React from 'react'
import { Navbar, Homepage, Footer, LoadSpinner, Transactions, Services, Market, MyFave, CoinPage  } from './components'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">       
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Routes >
            <Route path="/" element={<Market />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Send" element={[<Homepage />, <Services />, <Transactions />]} />
            <Route path="/favourites" element={<MyFave />} />
            <Route path="/Market/*" element={<CoinPage />}/>
          </Routes>
          <Footer />
        </div>           
      </div>
    </Router>
  )
}

export default App

{/* <div>
{view === "Send Crypto" && 
  <div className="min-h-screen">       
    <div className='gradient-bg-welcome'>
      <Navbar />
      <Homepage />
    </div>    
    <Services />
    <Transactions />
    <Footer />
  </div>
}
{view === "Market" && 
  <div className="h-full bg-black" >       
    <div className='gradient-bg-welcome'>
      <Navbar />
      {isMyFave ? <MyFave /> : <Market />}
    </div>    
    <Footer />
  </div>
}  
</div> */}
