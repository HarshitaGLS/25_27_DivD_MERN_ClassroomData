import React from 'react'
import { BsHouse, BsLockFill } from "react-icons/bs";
import { Link, NavLink } from 'react-router';
const MyNavbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" >
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto  mt-2 mt-lg-0">
            <li class="nav-item">
               <NavLink to="/" className="nav-link" style={
                  ({isActive})=>{
                    return {
                      textDecoration:"none",
                      color:isActive?"white":"gray",
                      backgroundColor:isActive?"rosybrown":""
                    }
                  }
                }> <BsHouse/> Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/about" className="nav-link" style={
                  ({isActive})=>{
                    return {
                      textDecoration:"none",
                      color:isActive?"white":"gray",
                      backgroundColor:isActive?"rosybrown":""
                    }
                  }
                }>About</NavLink>
              </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products" aria-current="page">Products</Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownId"
              >
                <a class="dropdown-item" href="#"
                  >Action 1</a>
                <a class="dropdown-item" href="#"
                  >Action 2</a>
              </div>
            </li> */}
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit" >
              Search
            </button>
          </form>
          <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item">
              <Link class="nav-link" to="/login"><BsLockFill />Login</Link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default MyNavbar
