import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
       
            <nav className="navbar navbar-expand-lg navbar-light py-5 px-3">
                <div className="container">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler mb-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experience</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                    </div>
            </nav>
        
   </>
   );
}

export default Navbar;