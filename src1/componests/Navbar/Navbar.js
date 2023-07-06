import React from "react";
import Logo from '../../images/logo.png'
 import {Link} from 'react-router-dom'

const Navbar = () =>{

    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    {/* <div className="logo">
                        <Link to='/'>
                        <img src={Logo}/>
                        </Link>
                    </div> */}
                    <ul className="nav-menu">
                        <li className="menu-item">
                            <Link to='/Home'>
                                Home
                            </Link>

                        </li>
                        <li className="menu-item">
                            <Link to='/About'>
                                About
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/Contact'>
                                Contact
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/Women'>
                                Women
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to='/Men'>
                                Men
                            </Link>
                        </li>
                        <li className="menu-item login">
                            <Link to='/Login'>
                                Login
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

        </header>
    )
}
 export default Navbar
