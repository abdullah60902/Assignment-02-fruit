import React from 'react'
import './cards.css'
export default function Cards (props) {
  return (
    <div>
 <div className="card-section">
                <div className="card">
                    <img src={props.img} alt="" id="card"/>
                    <h1 id="orange">{props.tittel}</h1>
                    <p id="orp">
                   {props.para}
                    </p>
                </div>

    </div>

</div>
    
  )
}
