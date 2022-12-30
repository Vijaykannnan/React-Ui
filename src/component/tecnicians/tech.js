import React, { useState } from 'react'

import './tech.css'
import techDetails from './techcians-details'
function Tech() {
    let [selected, setSelected] = useState(0);
    let arrLength = techDetails.length

    return (
        <div className="tech-grp">
            <h4 className='heading'>Techicians</h4>
            <div className="tech-content">
                <div className="tech-content-info">

                    <h1>Techcians dude</h1>
                    <h2 style={ { marginBottom: '3px' } }>About Us</h2>

                    { console.log(selected) }
                    {

                        <React.Fragment>
                            <p>{ techDetails[selected].content }</p>
                            <h4> <span>{ techDetails[selected].nameOf }</span> - { techDetails[selected].role }</h4>
                        </React.Fragment>

                    }

                    <div className='prev-next-btn'>
                        <button
                            onClick={
                                () => selected === 0 ? setSelected(arrLength - 1) : setSelected((prev) => prev - 1)
                            }><i className='fa fa-arrow-left'></i></button>
                        <button
                            onClick={ () => selected === arrLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                            }><i className='fa fa-arrow-right'></i></button>

                    </div>
                </div>
                <div className="tech-content-img">
                    <div className='bg-img'></div>
                    <img src={ techDetails[selected].Image } alt="" />
                </div>

            </div>

        </div >
    )
}
export default Tech