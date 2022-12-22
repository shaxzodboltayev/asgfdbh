import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='header-navbar'>
        <ul>
            <li><GiHamburgerMenu/><a href="">Barcha bolimlar</a></li>
            <li><a href=""> Yangliklar</a></li>
            <li><a href="">Yandi kelganlar</a></li>
            <li><a href="">Chegirmalar</a></li>
            <li><a href="">Kitoblar</a></li>
            <li><a href="">Telefon va gajetlar</a></li>
            <li><a href="">Televizorlar</a></li>
            <li><a href="">Sport buyumlar</a></li>
        </ul>
    </div>
  )
}
