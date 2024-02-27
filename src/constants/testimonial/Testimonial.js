import React from 'react'
import './testimonial.css'
import chacha from '../../assest/chacha.jpeg'
import lamon from '../../assest/lamon.jpeg'
export default function Testimonial() {
  return (
    <div >


<div className="chacha">
                <h1>Testimonial</h1>
                <p>There are many variations of passsage of lorem ipsum available, but the majority have

                </p>
            </div>
            
            <img src={chacha} alt="" class="chacha-img"/>

            <div className="johnnhex-div">
                <h1>Johnhex
                </h1>
                <p className="johnnhex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur eos aut
                    dignissimos distinctio
                    iusto molestiae illum architecto obcaecati recusandae vitae sapiente blanditiis soluta officia
                    similique, aspernatur aliquam exercitationem! Labore. distinctio iusto molestiae illum architecto
                    obcaecati recusandae vitae sapiente blanditiis soluta officia similique, aspernatur aliquam
                    exercitationem! Labore

                </p>
            </div>


        


            <form action="" className='contant'>
                <div className="masami">
                    <div>
                        <h1 id="heading-masami">Contact US</h1><input type="text" placeholder="Name"
                            className="input-field"/>

                        <input type="number" placeholder="Phone Number" className="input-field"/>
                        <input type="email" placeholder="Email" className="input-field" required/>
                        <input type="text" placeholder="Message" className="input-field" id="input-field"/> 
                        
                        <div className='button-mt'>
<button id="button-masami">Send</button>

</div>
                    </div>

                    <img src={lamon} alt="" id="masami-img"/>







                </div>


            </form>
            




    </div>
  )
}
