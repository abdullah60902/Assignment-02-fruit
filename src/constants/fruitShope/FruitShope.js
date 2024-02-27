import React from 'react'
import './fruitShope.css'
import disfruit from '../../assest/fruit-dis.jpeg'
export default function FruitShope() {
  return (
    <div>
        <div className='mt'>
            <div class="tra">
                <div>
                    <p id="h1">Welcome To </p>
                      <p id="h2">  Our Fruits Shop</p>
                    <div class="p6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae? Laudantium,
                            officiideserunt culpa suscipit voluptatem ab! Minima delectus ut ratione! Veritatis deleniti
                            inventore
                            nam veniam soluta,ab porro doloremque.
                        </p>
                        
                        <div class="button90">
                            <button id="bmain">Shope Now</button><button id="umain">Contect us</button>
                        </div>
                    </div>
                </div>
                <img src={disfruit} alt="" id="fruit"/>

            </div>
            
 </div>
        
    </div>
  )
}
