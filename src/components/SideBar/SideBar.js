import React from "react"
import { Link } from "gatsby"
import "./SideBar.css"

const SideBar = ({ show, click }) => {
  let sideBarClasses = "sidebar"
  show ? (sideBarClasses = "sidebar open") : (sideBarClasses = "sidebar")
  return (
    <>
      <nav className={sideBarClasses}>
        <div className="sidebar__header">
          <div className="sidebar__icon" onClick={click}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather cancel__icon"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>

        <div className="sidebar__body">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Helpful Tips </Link>
            </li>
            <li>
              <Link to="/">Test Centers</Link>
            </li>
            <li>
              <Link to="/">Donate</Link>
            </li>
            <li>
              <Link to="/">Useful Links</Link>
            </li>
            <li>
              <Link to="/">Contact Us </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideBar
