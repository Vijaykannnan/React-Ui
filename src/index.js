import React from "react"
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
ReactDOM.render((
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <App />
    </BrowserRouter>
), document.querySelector("#root"))
