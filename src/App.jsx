import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import Banner from './Components/Banner/banner.jsx'
import './App.css'
import {originals,action} from './urls.jsx'
import Rowposter from './Components/RowPoster/Rowposter.jsx'


function App(){
  return(
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowposter title="Netflix Originals" url={originals}/>
      <Rowposter title="Actions" isSmall  url={action}/>
    </div>
  )
}

export default App