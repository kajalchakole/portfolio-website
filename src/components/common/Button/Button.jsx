import { Link } from 'react-router-dom';
import './button.css'

const Button = function (props) {

    let { name, href, to, type, download } = props;
    const content = (
        <div className={`button ${type}`}>
            { name }
        </div>
    );

    if (to) {
        return <Link to={to}>{content}</Link>;
    }

    if (href) {
        return <a href={ href } download={ download }>{content}</a>;
    }

    return content;
}

export default Button;
