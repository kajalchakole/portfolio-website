import './button.css'

const Button = function (props) {

    let { name, href, type } = props;
    return (
        <a href={ href }>
            <div className={`button ${type}`}>
                { name }
            </div>
        </a>
    );
}

export default Button;