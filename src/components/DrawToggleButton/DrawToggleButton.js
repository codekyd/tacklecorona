import React from "react"
import "./DrawToggleButton.css"

const DrawToggleButton = ({ click }) => {
  return (
    <button className="toggle-button" onClick={click}>
      {/* <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather toggle__icon"
      >
        <line x1="17" y1="10" x2="3" y2="10"></line>
        <line x1="21" y1="6" x2="3" y2="6"></line>
        <line x1="21" y1="14" x2="3" y2="14"></line>
        <line x1="17" y1="18" x2="3" y2="18"></line>
      </svg>
    </button>
  )
}

export default DrawToggleButton
