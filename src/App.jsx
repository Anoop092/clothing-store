import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './routes/pages/home'
import Shop from './routes/pages/shop'
import NavigationBar from './routes/reusable-components/navigation'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
       
  </Routes>
  )
}

export default App
