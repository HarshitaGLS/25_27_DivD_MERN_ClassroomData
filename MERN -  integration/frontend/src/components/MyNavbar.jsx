import React from 'react'
import { Link } from 'react-router'

const MyNavbar = () => {
  return (
    <nav
        class="navbar navbar-expand-sm navbar-light bg-light"
    >
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
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">                      
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/users">Users</Link>
                    </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/adduser">Add User</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default MyNavbar
