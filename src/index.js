import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App'
ReactDOM.render((
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <App />
    </BrowserRouter>
), document.querySelector("#root"))


//basename ethuku add pannirukanah gitub la uplode pannumpotu blank ah varuthu so stackoverflow la refer pannann so anga ippdi than Browesrouter ku basename use panniruthanah