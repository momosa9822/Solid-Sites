import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form91.css'

const ContactForm91 = (props) => {
  return (
    <div
      className={`contact-form91-contact11 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-form91-max-width thq-section-max-width">
        <div className="contact-form91-section-title thq-card">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact-form91-text19">
                  Fill out the form below to get in touch with us.
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-form91-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form91-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form91-text21">
                    Have a question or need a quote? Reach out to us!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact-form91-content2">
          <form
            name="contact"
            action="/"
            method="POST"
            data-netlify="true"
            className="contact-form91-form thq-card"
          >
            <div className="contact-form91-input1">
              <label htmlFor="contact-form-9-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-9-name"
                name="name"
                placeholder="Full Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form91-input2">
              <label htmlFor="contact-form-9-email" className="thq-body-small">
                Email
              </label>
              <input
                type="text"
                id="contact-form-9-email"
                name="email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form91-container">
              <div className="contact-form91-input3">
                <label
                  htmlFor="contact-form-9-options"
                  className="thq-body-small"
                >
                  Choose one topic
                </label>
                <select
                  id="contact-form-9-options"
                  name="topic"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option id={props.optionId} value="Starter Site">
                    Starter Site
                  </option>
                  <option id={props.optionId1} value="Business Site">
                    Business Site
                  </option>
                  <option
                    id={props.optionId2}
                    value="Complete Business Website"
                  >
                    Complete Business Website
                  </option>
                  <option id={props.optionId3} value="Ask A Question">
                    Ask A Question
                  </option>
                  <option id={props.optionId4} value="Free Qoute">
                    Free Quote
                  </option>
                </select>
              </div>
            </div>
            <div className="contact-form91-input4">
              <label
                htmlFor="contact-form-9-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-9-message"
                name="message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form91-checkbox1">
              <input
                type="checkbox"
                id="contact-form-9-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-9-check" className="thq-body-small">
                I accept the Terms
              </label>
            </div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form91-text20">submit</span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm91.defaultProps = {
  optionId1: '',
  optionId4: '',
  optionId: '',
  optionId3: '',
  heading1: undefined,
  optionId2: '',
  content2: undefined,
  rootClassName: '',
  action: undefined,
  content1: undefined,
}

ContactForm91.propTypes = {
  optionId1: PropTypes.string,
  optionId4: PropTypes.string,
  optionId: PropTypes.string,
  optionId3: PropTypes.string,
  heading1: PropTypes.element,
  optionId2: PropTypes.string,
  content2: PropTypes.element,
  rootClassName: PropTypes.string,
  action: PropTypes.element,
  content1: PropTypes.element,
}

export default ContactForm91
