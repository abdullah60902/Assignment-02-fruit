import React from 'react'
import './fcommon.css'
export default function Fcommon(prt) {
  return (
    <div>
        <div>
        <div className="a">
                <div className="jkl">
                    <h1 id="buy">{prt.titel}
                    </h1>

                    <p id="pfresh">{prt.para1}

                    </p>
                    
                    <div>
                        <button className="now-buy">{prt.button}</button>
                    </div>

                </div>
                <div className="orange-fresh">
                    <img src={prt.img5} alt="" id=""/>
                </div>

            </div>


    </div>
    </div>
  )
}
