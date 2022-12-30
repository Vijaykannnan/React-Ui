import React from 'react'
// import profile from '../../img/db.png'
// import profile2 from '../../img/eco.jpg'
// import profile3 from '../../img/team.png'
import profile4 from '../../img/profile-rm.webp'
// import chart from '../../img/chart.png'
// import code from '../../img/code.png'
// import chat from '../../img/chat-rm.png'
// import note from '../../img/note-rm.png'

import './content.css'
import reactImg from '../../img/rc.png'
import { useDispatch, useSelector } from "react-redux"
function Content() {
    let newState = useSelector(state => state)
    // 
    return (
        <div className={ newState === "dark_mode" ? "dark-class" : "no-dark-class" }>
            < div className="main-content" >
                <div className="left-side">
                    <h1> <span className={ newState === "dark_mode" ? "title-dark" : null }><img src={ reactImg } alt="reactImg" /> REACT</span><br /> Landing Page</h1>
                    <p>To make an react project to upgrade skills and make experienced person,not justsimply learn using learning topics make some attrative! <span>Lets Move</span></p>
                    <button>Know More</button>
                    <div className="social-icons">
                        <ul>
                            <li title="facebook"><i className='fab fa-facebook'></i></li>
                            <li title="twitter"><i className='fab fa-twitter'></i></li>
                            <li title="instagram"><i className='fab fa-instagram'></i></li>
                            <li title="message"><i className='fa fa-envelope'></i></li>
                            <li title="github"><i className='fab fa-github'></i></li>
                            <li title="linkedIn"><i className='fab fa-linkedin'></i></li>
                        </ul>
                    </div>
                </div>
                <div className="right-side">
                    {/* <div className="overlay-images">
                    <img src={ chart } alt="chart" />
                    <img src={ code } alt="code" />
                    <img src={ chat } alt="chat" />
                    <img src={ note } alt="note" />
                </div> */}
                    {/* <div className='overlay'></div> */ }
                    <img src={ profile4 } alt="" className='profile' />
                </div>


            </div >
            <div className="arrow">

                <i className="fa-solid fa-angles-down"></i>
            </div>



            {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,288L1440,224L1440,320L0,320Z"></path>
        </svg> */}
        </div >




    )
}
export default Content