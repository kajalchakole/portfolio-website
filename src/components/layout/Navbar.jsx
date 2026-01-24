import Button from '../common/Button/Button';
import './navbar.css'
import Resume from '../../assets/Kajal_Chakole_Engineering_Manager_Resume.pdf'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = function () {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="nav-bar">
            <div className="nav-content logo">Kajal Chakole</div>
            <div className="nav-content nav-links">
                <div className="nav-link">
                    <button
                        type="button"
                        onClick={() => {
                            if (location.pathname !== '/') {
                                navigate('/');
                                return;
                            }
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Home
                    </button>
                </div>
                <div className="nav-link">
                    <button type="button" onClick={() => scrollToSection('about')}>
                        About
                    </button>
                </div>
                <div className="nav-link">
                    <button type="button" onClick={() => scrollToSection('projects')}>
                        Projects
                    </button>
                </div>
                <div className="nav-link">
                    <Link to="case-studies">
                        Case Studies
                    </Link>
                </div>
                {/* 
                <div className="nav-link">
                    <Link to="/blog">
                        Blog
                    </Link>
                </div>*/}
                <div className="nav-link">
                    <button type="button" onClick={() => scrollToSection('contact')}>
                        Contact Me  
                    </button>
                </div>
            </div>
            <div className="nav-content nav-cta">
                <Button name="Download Resume" type="primary" href={Resume} download />
            </div>
        </div>
    );
}

export default Navbar;
