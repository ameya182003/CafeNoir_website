import React from 'react'

function about() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <hr />
              <h2 className="intro-text text-center">About
                <strong>Cafe Noir</strong>
              </h2>
              <hr />
            </div>
            <div className="col-md-6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/lAd3LYIZMjs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="col-md-6">
              <p>Cafe Noir Launched in 2000, in the heart of California. Our Mission is simple. We want to teach coffee drinkers all over the world how to make the perfect blend! Our Coffee experts have a lifelong passion for coffee. They are internationally traveled and have experienced many varieties.</p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <hr />
              <h2 className="intro-text text-center">Our
                <strong>Team</strong>
              </h2>
              <hr />
            </div>
            <div className="col-sm-4 text-center">
              <img className="img-responsive" src="img/abt1.jpg" alt="" />
              <h3>JAMES JORDAN</h3>
            </div>
            <div className="col-sm-4 text-center">
              <img className="img-responsive" src="img/abt2.jpg" alt="" />
              <h3>JANE BROWN</h3>
            </div>
            <div className="col-sm-4 text-center">
              <img className="img-responsive" src="img/abt3.jpg" alt="" />
              <h3>ANNE MARIE</h3>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about

