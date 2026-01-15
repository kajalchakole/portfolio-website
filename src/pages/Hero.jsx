import Button from '../components/common/Button/Button'
import './hero.css'
import Resume from '../assets/Kajal_Chakole_Engineering_Manager_Resume.pdf'


const Hero = function () {
    return (
        <div className="hero">
            <div className="hero-content">

                <div className="hero-column hero-col-left">
                    <div className="hero-intro-row-1 hero-intro-row">
                        <div className="hero-eyebrow eyebrow">
                            HELLO
                        </div>
                    </div>
                    <div className="hero-intro-row-2 hero-intro-row">I'm
                        <strong> Kajal</strong>
                    </div>
                    <div className="hero-intro-row-3 hero-intro-row">
                        <div className="heading">
                            Engineering Manager,
                        </div>
                        <div className="sub-heading">
                            building scalable backend systems
                        </div>
                    </div>
                    <div className="hero-intro-row-4 hero-intro-row">
                        Leading high-impact engineering teams.
                    </div>
                    <div className="hero-button-bar">
                        <Button name="Download Resume" type="primary" href={Resume} download />
                        <Button name="View Projects" type="secondary" to="/projects" />
                    </div>
                </div>
                <div className="hero-column hero-col-right">
                    <div className="hero-keywords">
                        <span>SYSTEMS</span>
                        <span>SCALE</span>
                        <span>RELIABILITY</span>
                        <span>LEADERSHIP</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero
