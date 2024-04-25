import React from 'react'

function navebar() {
  return (
    <nav className="navbar navbar-default" role="navigation">
    <div className="container">
    <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            
            <a className="navbar-brand" href="index2.html">Cafe Noir</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/login'>Blog</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
            </ul>
        </div>
    </div>
  </nav>
  )
}

export default navebar
