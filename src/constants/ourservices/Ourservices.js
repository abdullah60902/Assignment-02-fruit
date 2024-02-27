import React from 'react'
import Cards from '../../components/common/cards/Cards'
import blackorg from '../../assest/black-org.jpeg'
import grapes from '../../assest/grapes.jpeg'
import blacklam from '../../assest/black-lamon.jpeg'
import './ourservices.css'

export default function Ourservices() {
  return (
    <div>
         <div class="para-head">
                <h1>Our Services
                </h1>
                <p id="para-h">There are many variations of passsage of lorem ipsum available, but the majority have

                </p>

            </div>
    <div className='display-card'>
        <Cards img={blackorg} tittel="orange" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur aperiam atque
                        nisi,
                        distinctio amet soluta beatae perferendis nesciunt dolorem, voluptatum cum? Hic, temporibus
                        consequuntur beatae natus quo repudiandae suscipit?"/>
        <Cards img={grapes} tittel="grapes"para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur aperiam atque
                        nisi,
                        distinctio amet soluta beatae perferendis nesciunt dolorem, voluptatum cum? Hic, temporibus
                        consequuntur beatae natus quo repudiandae suscipit?"/>
        <Cards img={blacklam} tittel="Gava" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur aperiam atque
                        nisi,
                        distinctio amet soluta beatae perferendis nesciunt dolorem, voluptatum cum? Hic, temporibus
                        consequuntur beatae natus quo repudiandae suscipit?"/>
    </div>
    <button class="b-read">Read more</button>
    </div>
  )
}
