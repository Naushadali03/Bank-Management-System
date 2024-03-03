import React from 'react'
import {Link} from 'react-router-dom'  
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li><Link className='link' to='/Home'>Home</Link></li>
            <li><Link className='link' to='/Deposit'>Deposit</Link></li>
            <li><Link className='link' to='/Withdraw'>Withdraw</Link></li>
            <li><Link className='link' to='/Balance'>CheckBalance</Link></li>
            <li><Link className='link' to='/Transfer'>Transfer</Link></li>
        </ul>
    </div>
  )
}

export default Nav