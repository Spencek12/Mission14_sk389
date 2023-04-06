import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
    
      <ul>
        <li>
        <img src="./joelhiltonlogo.png" alt="joel hilton logo"></img>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movieCollection">Movie Collection</Link>
        </li>
        <li>
          <Link to="/podcasts">My Podcasts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
