import Button from '../common/Button/Button';
import './navbar.css'

const Navbar = function (props) {

    function handleResumeDownload() {

    }

    return (
        <div className="nav-bar">
            <div className="nav-content logo">Kajal Chakole</div>
            <div className="nav-content nav-links">
                <div className="nav-link">Home</div>
                <div className="nav-link">About</div>
                <div className="nav-link">Projects</div>
                <div className="nav-link">Blog</div>
                <div className="nav-link">Contact</div>
            </div>
            <div className="nav-content">
                <Button name="Download Resume" type="primary" />
            </div>
        </div>
    );
}

export default Navbar;