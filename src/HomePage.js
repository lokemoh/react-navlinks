import React from "react";
import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <div className="App">
            <br />
            <br />
        <header>
          Home Page <br></br>
          <br />
        <h6><Link to ={'/about'}> About</Link></h6>
        <h6><Link to ={'/contact'}> Contact</Link></h6>
        </header>
      </div>
    )
}

export default HomePage;