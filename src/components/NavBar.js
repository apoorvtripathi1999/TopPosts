
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navBar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex justify-content-between" to="/" >Top Posts</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-self-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/myread">Read</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/membership">Membership</Link>
            </li>
          </ul>
        </div>
        <button type="button" id="btn-sign-in" className="btn btn-dark">Sign In</button>
      </div>
    </nav>
    </div>
    )
  }
}
