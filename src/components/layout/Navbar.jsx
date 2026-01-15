import Button from '../common/Button/Button';
import './navbar.css'
import { Link } from "react-router-dom";


const Navbar = function (props) {

    function handleResumeDownload() {

    }

    return (
        <div className="nav-bar">
            <div className="nav-content logo">Kajal Chakole</div>
            <div className="nav-content nav-links">
                <div className="nav-link"><Link to="/">Home</Link></div>
                <div className="nav-link">
                    <Link to="/about">
                        About
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/projects">
                        Projects
                    </Link>
                </div>
{/* 
                <div className="nav-link">
                    <Link to="/blog">
                        Blog
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/contact">
                        Contact
                    </Link>
                </div> */}
            </div>
            <div className="nav-content">
                <Button name="Download Resume" type="primary" />
            </div>
        </div>
    );
}

export default Navbar;