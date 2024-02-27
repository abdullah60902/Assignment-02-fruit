import React from 'react'
import Fcommon from '../../components/fcommon/Fcommon'
import grap from '../../assest/black-grap.jpeg'
import gava from '../../assest/gava.jpeg'
import org from '../../assest/orange.jpeg'
import './fresh.css'
export default function Fresh() {
  return (
    <div className='mt'>
       <div class="fhpara">
                <h1>Fresh Fruits
                </h1>
                <p className='font'>There are many variations of passsage of lorem ipsum available, but the majority have

                </p>
                </div>

                <div className='mtf'>
      <Fcommon titel="Buy Fresh Orange" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus culpa harum
                        porro a vitae, ratione dolore repellendus cumque obcaecati minus perspiciatis. Architecto
                        facilis
                        corporis beatae odit hic, enim dolore?
" button="Buy Now"img5={org}/>
       <Fcommon titel="Buy Fresh Grapes" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus culpa harum
                        porro a vitae, ratione dolore repellendus cumque obcaecati minus perspiciatis. Architecto
                        facilis
                        corporis beatae odit hic, enim dolore?
" button="Buy Now"img5={grap}/> <Fcommon titel="Buy Fresh Gava" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus culpa harum
porro a vitae, ratione dolore repellendus cumque obcaecati minus perspiciatis. Architecto
facilis
corporis beatae odit hic, enim dolore?
" button="Buy Now"img5={gava}/>
</div>

    </div>
  )
}
