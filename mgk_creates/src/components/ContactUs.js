import React from 'react'

export default function ContactUs() {
  return (
    <div>
    <section class="contact" id="contact">
                <div className="container">
                  <div class="contact-box">
                    <div className="contact-info">
                      <h3 className="title">Get in touch</h3>
                      <p className="text">
                        lets talk!
                      </p>
                      <div className="information-wrap">
                        <div className="information">
                          <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <p className="info-text">Nairobi, Kenya</p>
                        </div>
        
                        <div className="information">
                          <div className="contact-icon">
                            <i className="fas fa-paper-plane"></i>
                          </div>
                          <p class="info-text">elijah.nyasiando.mn@gmail.com</p>
                        </div>
        
                        <div className="information">
                          <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                          </div>
                          <p className="info-text">+2547-1442-4586</p>
                        </div>
                      </div>
                    </div>
        
                    <div className="contact-form">
                      <h3 className="title">Contact me</h3>
                      <div className="row">
                        <input type="text" className="contact-input" placeholder="First Name"/>
                        <input type="text" className="contact-input" placeholder="Last Name"/>
                      </div>
        
                      <div class="row">
                        <input type="text" className="contact-input" placeholder="Phone" />
                        <input type="email" className="contact-input" placeholder="Email" />
                      </div>
        
                      <div class="row">
                        <textarea name="message" className="contact-input textarea" placeholder="Message"></textarea>
                      </div>
                      <a href=" " className="btn">Send</a>
                    </div>
                  </div>
                </div>
            </section>

            <section className="hireme" id="hireme">
                <div className="container">
                  <h3 className="title">Let's talk about a project</h3>
                  <p className="text">
                    Hey! Do you wish to collaborate on a project? Do you have an idea that you want it to be realised?
                     <br/>
                    Ellicit my services. You will be amazed on what can be done.

                  </p>
                  <a href="" className="btn">Hire me</a>
                </div>
            </section>
    </div>
  )
}
