import React from "react"
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-wrapper"> 
        <div className="main-info">
            <h1>Practice React</h1>
            <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Practice React", "React"]}
                typeSpeed={40}
                backSpeed={50}
                loop
            
            />

        </div>
    </div>
  )
}

export default Header