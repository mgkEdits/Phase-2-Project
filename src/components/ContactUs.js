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
                  Let's embark on a collaborative journey to bring your project to life. With a team of skilled developers at our disposal, we can turn your ideas into reality, leveraging a diverse range of expertise. Whether you have a specific vision or need assistance shaping your concept, our collaborative effort will yield impressive results.
                  <br/>
                  Our team is equipped to handle various aspects of the project, from conceptualization and design to implementation and optimization. I'm excited to contribute my skills alongside other talented developers to create a robust and innovative solution tailored to your needs.
                  <br/>
                  Communication and transparency will be the pillars of our collaboration, ensuring that your vision is not only realized but exceeded. Together, we can navigate the intricacies of development, iterate on ideas, and deliver a product that stands out in today's dynamic landscape.
                  <br/>
                  Let's join forces, harness the power of collaboration, and turn your project into a success story. The possibilities are boundless, and I'm eager to be part of this transformative journey with you and the team.

                  </p>
                  <h2>Git-BoostRepo</h2>
                  <a href="" className="btn">Hire me</a>
                </div>
            </section>
    </div>
  )
}
