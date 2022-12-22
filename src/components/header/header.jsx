import React from 'react'
import "./header.css"
import Search from './Search'
import HeaderIcons from './HeaderIcons'
import {AiOutlineMenu} from 'react-icons/ai'
function ResponsiveHeader() {
  return(
    <div className='header-responsive'>
      <div className='header-responsive-top'>
        <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />

        <AiOutlineMenu/>
       
      </div>
      <Search/>
    </div>
  )
  
}
export default function Header() {
  return (
    <div>
      <ResponsiveHeader/>
      <div className='header-container'>
        <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" style={ {marqenRight:40} } />
        <Search/>
        <HeaderIcons/>    
     </div>
    </div>
  )
}
