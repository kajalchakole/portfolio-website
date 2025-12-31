import Button from '../components/common/Button/Button'
import './hero.css'


const Hero = function (props) {
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
                        <Button name="Download Resume" type="primary" />
                        <Button name="View Projects" type="secondary" />
                    </div>
                </div>
                <div className="hero-column hero-col-right">
                </div>
            </div>
        </div >
    )
}

export default Hero