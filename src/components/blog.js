import React from "react";
import { useLocation } from 'react-router-dom';

function Blog() {
  const location = useLocation();
  const userName = location.state && location.state.id; // Check if location.state exists

  return (
    <div className="container">
      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <h2 className="text-center">
              Hello {userName ? userName : 'Guest'} and welcome to the Blog
            </h2>
            <hr />
            <h2 className="intro-text text-center">
              Cafe Noir
              <strong> Blog</strong>
            </h2>
            <hr />
          </div>
          <div className="col-lg-12 text-center">
            <img
              className="img-responsive img-border img-full"
              src="img/slide-1.jpg"
              alt=""
            />
            <h2>
              COCONUT OIL COFFEE
              <br />
              <small>OCTOBER 13, 2016</small>
            </h2>
            <p>
              Start your morning off with this great recipe for hot coffee with
              coconut oil and butter.
            </p>
            <button
              type="button"
              className="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              Read More
            </button>
            <hr />
          </div>
          <div className="col-lg-12 text-center">
            <img
              className="img-responsive img-border img-full"
              src="img/slide-2.jpg"
              alt=""
            />
            <h2>
              IRISH COFFEE
              <br />
              <small>SEPTEMBER, 2014</small>
            </h2>
            <p>
              Take the edge off with a Fresh hot cup of coffee made with Irish
              whiskey and Irish Cream.
            </p>
            <button
              type="button"
              className="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal2"
            >
              Read More
            </button>
            <hr />
          </div>
          <div className="col-lg-12 text-center">
            <img
              className="img-responsive img-border img-full"
              src="img/slide-3.jpg"
              alt=""
            />
            <h2>
              FROZEN CARAMEL LATTE
              <br />
              <small>JULY 18, 2012</small>
            </h2>
            <p>
              Sweetened with caramel sauce and topped with whipped cream, this
              will make you happy any time of day.
            </p>
            <button
              type="button"
              className="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal3"
            >
              Read More
            </button>
            <hr />
          </div>
          <div className="col-lg-12 text-center">
            <ul className="pager">
              <li className="previous">
                <a href="#">&larr; Older</a>
              </li>
              <li className="next">
                <a href="#">Newer &rarr;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal 1 */}
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
              <h4 className="modal-title">Coconut Oil Coffee</h4>
            </div>
            <div className="modal-body">
              <p>
                Coconut Oil Coffee is a delightful concoction that elevates your
                morning coffee routine to a whole new level. It starts with a
                freshly brewed cup of your favorite coffee, hot and aromatic,
                ready to kickstart your day. What sets Coconut Oil Coffee apart
                is the addition of rich and creamy coconut oil, which imparts a
                tropical twist and a host of potential health benefits.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 */}
      <div id="myModal2" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
              <h4 className="modal-title">Irish Coffee</h4>
            </div>
            <div className="modal-body">
              <p>
                Irish Coffee is a classic and comforting hot cocktail that
                combines rich, dark coffee with Irish whiskey, brown sugar, and a
                dollop of whipped cream. It is the perfect fusion of warmth,
                flavor, and a touch of indulgence, making it a beloved beverage
                enjoyed around the world. This iconic drink starts with a strong,
                freshly brewed cup of coffee, which sets the foundation for a
                delightful combination of flavors.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 */}
      <div id="myModal3" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
              <h4 className="modal-title">Frozen Caramel Latte</h4>
            </div>
            <div className="modal-body">
              <p>
                A Frozen Caramel Latte is a delightful and refreshing coffee
                beverage that blends the rich flavors of coffee with sweet
                caramel, chilled to perfection. It is a cool, creamy, and utterly
                satisfying coffee creation that promises to whisk you away to a
                world of indulgence and refreshment. This icy concoction begins
                with a base of premium, freshly brewed coffee, the essence of
                which infuses every sip.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Blog