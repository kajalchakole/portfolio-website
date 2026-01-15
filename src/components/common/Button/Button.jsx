import { Link } from 'react-router-dom';
import './button.css'

const Button = function (props) {

    let { name, href, to, type, download, onClick } = props;

    if (to) {
        return <Link to={to} className={`button ${type}`} onClick={onClick}>{name}</Link>;
    }

    if (href) {
        return <a href={href} download={download} className={`button ${type}`}>{name}</a>;
    }

    return (
        <button type="button" className={`button ${type}`} onClick={onClick}>
            {name}
        </button>
    );
}

export default Button;
