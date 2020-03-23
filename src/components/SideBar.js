import React from 'react'
import { Link } from 'gatsby'

const SideBar = ({ show }) => {
  let sideBarClasses = 'sidebar';
  show ? sideBarClasses ='sidebar open'  : sideBarClasses = 'sidebar'
    return (
        <>
            <nav className={sideBarClasses}>
              <div className="sidebar__header">
                
              </div>
                
            <div className="sidebar__body">
           
              <ul>
              <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Report/ get Help</Link></li>
       
                <li><Link to="/">Donate </Link></li>
              </ul>

            </div>

            </nav>
        </>
    )
}

export default SideBar
