import React from 'react'
import './footer.css'
import fac from '../../assest/facbook.jpeg'
import twitter from '../../assest/Twitter.jpeg'
import linked from '../../assest/in.jpeg'
import insta from '../../assest/insta.jpeg'



export default function Footer() {
    var currentDate = new Date ;
  var fullYear = currentDate.getFullYear();

  return (





    <div>

<div className='mrf'>

<div className="follow-div">
                    <div>
                        <h1 className="item-h1">
                            Fruits
                        </h1>
                        <p className="item">Mulberry

                        </p>
                        <p className="item">Guava</p>
                        <p className="item">Papaya</p>
                        <p className="item">Mandarin</p>
                        <p className="item">Satsuma</p>
                        <p className="item">Pineapple

                        </p>
                        <p className="item">Raspberry

                        </p>
                        <p className="item">Sugarcane</p>
                    </div>
                    <div>
                        <h1 className="item-h1">
                            Fruits
                        </h1>
                        <p className="item">Mulberry

                        </p>
                        <p className="item">Guava</p>
                        <p className="item">Papaya</p>
                        <p className="item">Mandarin</p>
                        <p className="item">Satsuma</p>
                        <p className="item">Pineapple

                        </p>
                        <p className="item">Raspberry

                        </p>
                        <p className="item">Sugarcane</p>
                    </div>
                    <div>
                        <h1 className="item-h1">
                            Fruits
                        </h1>
                        <p className="item">Mulberry

                        </p>
                        <p className="item">Guava</p>
                        <p className="item">Papaya</p>
                        <p className="item">Mandarin</p>
                        <p className="item">Satsuma</p>
                        <p className="item">Pineapple

                        </p>
                        <p className="item">Raspberry

                        </p>
                        <p className="item">Sugarcane</p>
                    </div>

                    <div>
                        <h1 className="item-h1">Follow Us</h1>

                        <img src={fac} alt="" id="fac"/>
                        <img src={twitter} alt="" id="fac"/>
                        <img src={linked} alt="" id="fac"/>
                        <img src={insta} alt="" id="fac"/>

                        <h1 className="h1-form">Subscribe Now
                        </h1>
                        <form action="">
                            <input type="text" className="form-input"/>
                            <div>
                            <button  className="subs">Subscribe</button>
                            </div>
                        </form>
                    </div>



                


            
</div>





        </div>

<div className='footer' >
    <p className='center'>

All Copywrite &copy; {fullYear} reserved by <a href="https://github.com/abdullah60902"target='blank' className='abd'>Abdullah</a>
</p>
</div>
    



    </div>
  )
}
