import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm91 from '../components/contact-form91'
import FAQ14 from '../components/faq14'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Quick Strong Sheep</title>
        <meta property="og:title" content="Contact - Quick Strong Sheep" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Pricing</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Contact</span>
          </Fragment>
        }
        link11={
          <Fragment>
            <span className="contact-text18">Pricing</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text19">Pricing</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text20">Get a qoute</span>
          </Fragment>
        }
        link1Url="/"
        link1Url1="/pricing"
        rootClassName="navbar8root-class-name1"
        page1Description={
          <Fragment>
            <span className="contact-text21">
              Welcome to our website development agency!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text22">
              Explore our services for service-based businesses.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text23">
              Learn more about our agency and team.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text24">
              Get in touch with us for your website needs.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm91
        action={
          <Fragment>
            <span className="contact-text25">submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text26">
              Have a question or need a quote? Reach out to us!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text27">
              Fill out the form below to get in touch with us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text28">Contact Us</span>
          </Fragment>
        }
        rootClassName="contact-form91root-class-name"
      ></ContactForm91>
      <FAQ14
        text={
          <Fragment>
            <span className="contact-text29">
              We offer complete website solutions for small service-based
              businesses. This includes custom web design, responsive mobile
              development, SEO setup, and conversion-boosting layouts. Whether
              you need a simple one-pager or a full multi-section business site,
              we’ve got you covered.
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="contact-text30">
              Most websites take 1 to 2 weeks, depending on your needs. Simple
              landing pages can be done in a few days, while larger, custom
              sites may take a bit longer , but we always keep you updated and
              deliver on time.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="contact-text31">
              {' '}
              No , the demo is free , after you are satisfied we only require a
              50% deposit to secure your booking. The remaining amount is paid
              on final delivery before going live.
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="contact-text32">
              <span>
                We don’t directly host websites, but we’ll set up and connect
                you with reliable, low-cost hosting platforms like Hostinger,
                Netlify, or local South African providers. We handle the tech ,
                you don’t have to lift a finger.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="contact-text36">
              Just send us a message via the contact form or email, and we’ll
              get back to you within a few hours. We’ll chat about your needs,
              budget, and ideas , then give you a custom plan and quote. No
              stress, no pressure, just real results.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text37">
              Some commonly asked questions 
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text38">FAQs</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="contact-text39">Still have a question?</span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="contact-text40">What services do you offer?</span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="contact-text41">
              How long does it take to build a custom website?
            </span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="contact-text42">
              {' '}
              Do I need to pay the full amount upfront?
            </span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="contact-text43">
              Do you provide hosting services for websites?
            </span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="contact-text44">
              How do I get started with your website development services?
            </span>
          </Fragment>
        }
      ></FAQ14>
      <Contact11
        email={
          <Fragment>
            <span className="contact-text45">
              buildwithsolidsites@gmail.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text46">+(27)64 859 4861</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text47">
              Have a project in mind or need more information? Reach out to us!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text48">
              Our team is ready to assist you with any inquiries or requests.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text49">
              Feel free to contact us via email, phone, or whatsapp.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text50">+(27)64 859 4861</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text51">Get in Touch</span>
          </Fragment>
        }
      ></Contact11>
      <Footer4
        text={
          <Fragment>
            <span className="contact-text52">
              All rights reserved. We provide high-quality, responsive website
              design and development services tailored to help small businesses,
              professionals, and service providers establish a strong online
              presence. Our solutions are designed with performance, simplicity,
              and long-term reliability in mind. Use of this website constitutes
              acceptance of our standard terms and conditions. For more
              information, please refer to our [Terms of Service] and [Privacy
              Policy].
            </span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="contact-text53">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text54">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text55">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text56">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text57">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text58">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text59">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
    </div>
  )
}

export default Contact
