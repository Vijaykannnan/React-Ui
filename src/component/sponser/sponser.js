import React from 'react'

import './sponser.css'
import sponserDetail from "./sponser-details"
//for loading event
import { Box, Stack, Typography } from '@mui/material';

import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from 'react'
import Sponser from './sponser.js'


function sponser() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)

  }, [])
  return (
    <div className="container2">

      <div className='sponser-group'>

        { sponserDetail.map((value) => {
          // console.log("value", value);
          // console.log("img", value.img);
          // console.log("hii")
          return (


            <div className='sponser-details' key={ value.id }>
              <Stack direction='row' spacing={ 1 } sx={ { width: '100%' } }>
                { loading ? (<Skeleton varient="rectangalur" width={ 100 } height={ 100 } style={ { margin: 'auto' } } animation='wave' />) : (<img src={ value.img } alt="sponser-img"></img>) }
              </Stack>
              <Stack sx={ { width: '80%', margin: 'auto' } }>
                { loading ? (<Skeleton varient='text' width="100%" height="2rem" animation="wave" />) : (<h3>{ value.nameOf }</h3>) }
              </Stack>
              <Stack sx={ { width: '100%' } }>
                { loading ? (<Skeleton varient='text' width="100%" height="10rem" style={ { marginTop: '-20px' } } animation="wave" />) : (<p>{ value.content }</p>) }
              </Stack>
              <Stack sx={ { width: '50%', margin: 'auto' } }>
                { loading ? (<Skeleton varient='text' width="100%" height="3rem" style={ { marginTop: '-23px' } } animation="wave" />) : (<button>visit more</button>) }
              </Stack>

            </div>



          )

        })
        }

      </div>



    </div >

  )
}

export default sponser;