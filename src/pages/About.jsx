import './about.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = function () {
    return (
        <div className='about-container'>
            <div className="about-grid  two-col-grid">

                <div className="about-col-left two-col-left">
                    <div className="about-label eyebrow">
                        About Me
                    </div>
                    <div className="about-sub-header sub-heading">
                        <strong>
                            Engineering leadership,
                        </strong>
                        <br />
                        with strong backend foundations
                    </div>
                    <div className="summary">
                        I'm an Engineering Manager with deep backend experience, focused on building scalable systems while growing strong engineering teams.
                        <br /><br />
                        Over the years, I've led engineers across multiple teams, delivered high-impact platforms, and worked closely with product and business stakeholders to ship reliable systems at scale.
                        <br /><br />
                        I care deeply about technical clarity, pragmatic decision-making, and creating environments where engineers can do their best work.
                    </div>
                </div>

                <div className="about-col-right two-col-right">
                    <div className='highlights'>
                        Key Highlights
                    </div>
                    <ul className='highlight-keys'>
                        <li><i className="fa-solid fa-check"></i>
                            14+ years in engineering & leadership</li>
                        <li><i className="fa-solid fa-check"></i>
                            Led teams of 32+ engineers</li>
                        <li><i className="fa-solid fa-check"></i>
                            Built systems serving 40k+ users</li>
                        <li><i className="fa-solid fa-check"></i>
                            Domains: backend platforms, integrations, workflows</li>
                    </ul>
                </div>
            </div>
            <div className="tech-strip">
                Backend • Distributed Systems • Team Leadership • Delivery
            </div>
        </div>
    );
}


export default About