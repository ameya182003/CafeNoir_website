import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <hr />
              <h2 className="intro-text text-center">Contact <strong>Cafe Noir</strong></h2>
              <hr />
              <div class="col-lg-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3948563364174!2d72.82491917356703!3d19.002314654284834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa504efa8df%3A0x54aa01ee56f98797!2sCafe%20Noir!5e0!3m2!1sen!2sin!4v1687105730014!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
              <p>
                Phone: <strong>800-000-0000</strong>
              </p>
              <p>
                Email: <strong><a href="mailto:cafenoir@gmail.com">cafenoir@gmail.com</a></strong>
              </p>
              <p>
                Address: <strong>World Crest<br />Lower Parel</strong>
              </p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <hr />
              <h2 className="intro-text text-center">Contact <strong>form</strong></h2>
              <hr />
              <div id="add_err2"></div>
              <form role="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-lg-4">
                    <label>Name</label>
                    <input type="text" id="fname" name="fname" maxLength="25" className="form-control" />
                  </div>
                  <div className="form-group col-lg-4">
                    <label>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      maxLength="25"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}  />

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                  </div>
                  <div className="clearfix"></div>
                  <div className="form-group col-lg-12">
                    <label>Message</label>
                    <textarea className="form-control" id="message" name="message" maxLength="100" rows="6"></textarea>
                  </div>
                  <div className="form-group col-lg-12">
                    <button type="submit" id="contact" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
