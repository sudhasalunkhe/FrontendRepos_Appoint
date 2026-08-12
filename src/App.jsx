import React from 'react'
import Error404 from './component/Error404'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './component/Home'
import ListAppointment from './component/ListAppointment'
import ScheduleAppointment from './component/ScheduleAppointment'
import UpdateAppointment from './component/UpdateAppointment'
import {BrowserRouter,Routes,Route} from 'react-router'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header/>

    <div className='content'>
      <Routes>
        <Route path={''} element={<Home/>}></Route>
        <Route path={'/appointments'} element={<ListAppointment/>}></Route>
        <Route path={'/appointments/book'} element={<ScheduleAppointment/>}></Route>
        <Route path={'/appointments/update/:id'} element={<UpdateAppointment/>}></Route>
        <Route path={'*'} element={<Error404/>}></Route>



      </Routes>
      </div>

      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App