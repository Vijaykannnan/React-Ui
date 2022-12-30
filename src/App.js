import React, { useState } from "react";
import Header from './component/header/header'
import Content from './component/content/content'
import Sponser from './component/sponser/sponser.js'
import Tech from './component/tecnicians/tech.js'
import HelpContact from './component/helpContact/contact.js'
import Footer from './component/footer/footer.js'
import reducer from "./component/Redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Routs, Route, Routes } from 'react-router-dom'

//for loading event


const store = createStore(reducer)
// console.log("store", store);

function App() {
    // let [moonClicked, setMoonClicked] = useState("light")

    return (
        <Provider store={ store }>
            {/* <React.Fragment> 

            <Header />
            <Content />
            <Sponser />
            <Tech />
            <Footer />
          </React.Fragment>  */}

            <Routes>
                {/* <Route path="/" element={  }></Route>  */ }
                <Route path="" element={ <React.Fragment><Header /><Content /><Sponser /><Tech /><Footer /></React.Fragment> }></Route>
                <Route path="/sponser" element={ <React.Fragment><Header /><Sponser /></React.Fragment> }></Route>
                <Route path="/tech" element={ <React.Fragment><Header /><Tech /></React.Fragment> }></Route>

                <Route path="/contact" element={ <React.Fragment><Header /><HelpContact /></React.Fragment> }></Route>
            </Routes >

        </Provider >

    )
}
export default App

