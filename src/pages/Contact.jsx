import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-shell">
        <div className="contact-header">
          <div className="contact-label eyebrow">Contact</div>
          <div className="contact-title sub-heading">Let&apos;s Work Together</div>
          <p className="contact-intro">
            I partner with teams building calm, reliable products. Share a brief note or
            connect on socials to start the conversation.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-panel contact-panel-primary">
            <div className="contact-panel-header">
              <div className="contact-panel-title">Reach me</div>
              <span className="contact-pill">Open to select projects</span>
            </div>
            <div className="contact-cards">
              <a className="contact-card" href="mailto:kajalworks@gmail.com">
                <span className="contact-card-icon">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <div>
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">kajalworks@gmail.com</div>
                </div>
              </a>
              <a
                className="contact-card"
                href="https://www.linkedin.com/in/kajal-chakole-47175944/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-card-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <div>
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">linkedin.com/in/kajal-chakole-47175944</div>
                </div>
              </a>
              <a
                className="contact-card"
                href="https://github.com/kajalchakole"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-card-icon">
                  <i className="fa-brands fa-github"></i>
                </span>
                <div>
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">github.com/kajalchakole</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-panel contact-panel-secondary">
            <div className="contact-panel-title">Details</div>
            <div className="contact-meta-grid">
              <div>
                <span className="contact-meta-label">Location</span>
                <span className="contact-meta-value">India</span>
              </div>
              <div>
                <span className="contact-meta-label">Response Time</span>
                <span className="contact-meta-value">Within 24-48 hours</span>
              </div>
              <div>
                <span className="contact-meta-label">Focus</span>
                <span className="contact-meta-value">Leadership, platforms, product delivery</span>
              </div>
              <div>
                <span className="contact-meta-label">Availability</span>
                <span className="contact-meta-value">Quarterly advisory or project-based</span>
              </div>
            </div>
            <div className="contact-cta">
              <div className="contact-cta-title">Prefer a quick intro?</div>
              <p className="contact-cta-text">
                Send an email with a few sentences about your goals and I&apos;ll share
                the next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
