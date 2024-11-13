import React from 'react'
import "./Header.css"

function Header() {
  let hide=()=>{
    
    document.getElementById('sidebar').style.display = "none";
  }
  let show=()=>{
    
    document.getElementById('sidebar').style.display = "flex";
  }
  return (
    <>
<div className='Header-wrapper my-6'>
        <div className="logo"><h1 className=' text-3xl'>LIST <span style={{color:"orangered"}}>RACE</span></h1></div>
        <div className="links">
            <ul id='hidebar' className='hidebar'>
                <li className='active'>HOME</li>
                <li>HOW IT WORKS</li>
                <li>EXPLORE</li>
                <li>REVIEW</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
                <li id='showbtn'   onClick={show}><i   style={{fontSize:"1.9em"}} class="fa-solid fa-bars"></i></li>
            <ul style={{display:"none"}}  id='sidebar'  className='sidebar'>
           <li onClick={hide}> <i  style={{fontSize:"1.9em"}} class="fa-solid fa-xmark"></i></li>
                <li className='active'>HOME</li>
                <li>HOW IT WORKS</li>
                <li>EXPLORE</li>
                <li>REVIEW</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </div>
</div>
    </>
  )
}

export default Header