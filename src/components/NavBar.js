
import React, { Component } from 'react'

export default class navBar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex justify-content-between" href="/" >Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-self-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Top Stories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">My Read</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Membership</a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch me-4">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
        <button type="button" id="btn-sign-in" className="btn btn-dark">Sign In</button>
      </div>
    </nav>
    </div>
    )
  }
}
