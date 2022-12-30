import React, { useState, useEffect } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import profile from '../../img/db.png'
import logo from '../../img/logo.png'
import { darkMode, lightMode } from "../Redux/action";
import { useDispatch, useSelector, connect } from "react-redux"

const mapStateToProps = (state) => {
    return { mode: state }
}
//useselector um use panalam but nerya vati adthu use pannitan ithu koncham pudhusha irukulah athan itha use pandran

// const mapDispatchToProps = (dispatch) => {

//     return {
//         darkMode: () => dispatch(darkMode()),
//         lightMode: () => dispatch(lightMode())
//     }
// return state.newMode;
//}

function Header(props) {

    console.log(props);
    // console.log("props " + props);
    // const data = useSelector(val => console.log("val", val), shallowEqual);

    // function newStates() {

    //     useEffect(() => {

    //         // darkMode();
    //     }, [])


    // }
    // newStates()

    // console.log("newState - " + newState);

    let [Actived, SetActived] = useState("home")
    let [menuClicked, setMenuClicked] = useState("noClicked")

    let [showLightMoon, setLigthToDark] = useState("lightMoon")

    let dispatch = useDispatch();

    let changeModeDark = () => {
        dispatch(lightMode())
        // props.lightMode();
        setLigthToDark("lightMoon")
    }
    let changeModeLight = () => {
        dispatch(darkMode())
        // props.darkMode();
        setLigthToDark("darkMoon")
    }
    return (
        <div className={ props.mode === "dark_mode" ? "container dark-class" : "container no-dark-class" }>
            <div className="navbar">

                <div className='logo'>
                    <img src={ logo } alt="logo" />
                </div>

                <div className={ showLightMoon === "lightMoon" ? "moon blackCol" : "moon whiteCol" }>
                    <ul className={ menuClicked === "clicked" ? "menus menu-dropdown" : "menus no-menu-dropdown" }>

                        <li><Link to="/" className={ Actived === "home" ? "active" : null } onClick={ () => SetActived("home") }>Home</Link></li>
                        <li><Link to="/sponser" className={ Actived === "Sponser" ? "active" : null } onClick={ () => SetActived("Sponser") }>Sponser</Link></li>
                        <li><Link to="/tech" className={ Actived === "Technician" ? "active" : null } onClick={ () => SetActived("Technician") } >Technician</Link></li>
                        <li><Link to="/contact" className={ Actived === "Contact" ? "active" : null } onClick={ () => SetActived("Contact") }>Contact</Link></li>
                    </ul>

                </div >
                <div className={ showLightMoon === "lightMoon" ? "search-bar" : "search-bar dark-search-bar" }>
                    <form action="">
                        <span className='fa fa-search'></span>
                        <input type="search" placeholder='search' />
                    </form>
                </div>
                <div className="profiles">
                    <ul>
                        <div className='moon-items'>

                            { showLightMoon === "darkMoon" ? <span title='only work on home page' className={ menuClicked === "noClicked" ? "fa show-moon" : "fa moon2" } onClick={ changeModeDark }>&#xf186;</span> : null }
                            { showLightMoon === "lightMoon" ? <span title='only work on home page' className={ menuClicked === "noClicked" ? "fa show-moon" : "fa moon" } onClick={ changeModeLight }>&#xf186;</span> : null }
                        </div>

                        <li><img src={ profile } alt="profile" className='user-img' /></li>
                        { console.log(menuClicked) }

                        { (menuClicked === "noClicked") ? <span className="nav-icon fa fa-bars" onClick={ () => { setMenuClicked("clicked") } }></span>
                            : <li className="close-bar fa fa-times" onClick={ () => { setMenuClicked("noClicked") } }></li> }

                    </ul>
                    <div>

                    </div>

                </div>
            </div >
        </div >
    )
}


export default connect(mapStateToProps)(Header)