import React from 'react'
import orgpic from '../../assest/pic-org.jpeg'
import search from '../../assest/search.jpeg'
import line from '../../assest/line.jpeg'
import './header.css'
export default function Header() {
  return (
    <div className='main'>
<div className='navbar-main'>
<div className='img-text-dp'>
    <img src={orgpic} alt="" className='orgpic0' />
    <h1 className='TROPIKO'>TROPIKO
</h1>
</div>

<div>
<div className="display-left-navbar">
                <h2 className="para" id="color">Home</h2>
                <h2 className="para" id="color">Fruits</h2>
                <h2 className="para" id="color">Services</h2>
                <h2 className="para" id="color">Contect us</h2>
                <img src={search} alt="" id='search'/>
                <button className="para" id="button">
                    GET A QUOTE
                </button>
                <img src={line} alt="" id="line-img" className=""/>

            </div>
</div>


</div>





    </div>
  )
}
