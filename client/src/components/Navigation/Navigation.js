import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    return(

        <nav className="navbar navbar-fixed-lg">
        <a className="navbar-brand">DisneyWithLindsey</a>
        {/* <a className="navbar-brand parker"><Link to="/Home" className={location.pathname === "/Home"}>Parker Martin</Link></a> */}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to='/Home'
                        className={location.pathname ==="/Home" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='articles'
                        className={location.pathname ==="/articles" ? "nav-link active" : "nav-link"}>
                        Articles
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='login'
                        className={location.pathname ==="/login" ? "nav-link active" : "nav-link"}>
                        Login
                    </Link>
                </li>
        
      </ul>
      </nav>
        
            
          


  
    )
}

export default Navigation;