import React from 'react'

function indu() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="box">
            <div className="col-lg-12 text-center">
              <div id="carousel-example-generic" className="carousel slide">
                <ol className="carousel-indicators hidden-xs">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="2"
                  ></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img
                      className="img-responsive img-full"
                      src="img/slide-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-responsive img-full"
                      src="img/slide-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-responsive img-full"
                      src="img/slide-3.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#carousel-example-generic"
                  data-slide="prev"
                >
                  <span className="icon-prev"></span>
                </a>
                <a
                  className="right carousel-control"
                  href="#carousel-example-generic"
                  data-slide="next"
                >
                  <span className="icon-next"></span>
                </a>
              </div>
              <h2 className="brand-before">
                <small>Welcome to</small>
              </h2>
              <h1 className="brand-name">Cafe Noir</h1>
              <hr className="tagline-divider" />
              <h2>
                <small>
                  By <strong>Ameya Modak</strong>
                </small>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <hr />
              <h2 className="intro-text text-center">
                HOW TO MAKE
                <strong>THE PERFECT CUP OF COFFEE</strong>
              </h2>
              <hr />
              <img
                className="img-responsive img-border img-left"
                src="img/intro-pic.jpg"
                alt=""/>
              <hr className="visible-xs" />
              <p>
                Making the perfect cup of coffee can be challenging! With so
                many unique flavors and recipes to choose from, where do you
                begin? Our website provides you with the best recipes from
                around the world. Whether you prefer your coffee hot or mild or
                bracingly cold and strong, we are sure to have what you are
                looking for. For access to unlimited recipes, you must start
                registering! Registration is free. Click here to get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default indu

