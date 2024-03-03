import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Balance from './Balance'
import CreateAcc from './CreateAcc'
import Deposit from './Deposit'
import './home.css'
import Nav from './Nav'
import Transfer from './Transfer'
import Withdraw from './Withdraw'
function Home() {
  return (
    <div className='home'>
    <div className="homecont">
    <Nav/>
      <Routes>
        <Route path='/Home' element={<CreateAcc/>}/>
        <Route path='/Deposit' element={<Deposit/>}/>
        <Route path='/Balance' element={<Balance/>}/>
        <Route path='/Withdraw' element={<Withdraw/>}/>
        <Route path='/Transfer' element={<Transfer/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Home