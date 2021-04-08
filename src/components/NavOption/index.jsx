import { Link } from 'react-router-dom';
import './NavOption.scss';

function NavOption({ name, setActiveRoute, urlPath }) {
    const actualPath = urlPath;  

    const navOption = (
        <div className='nav__option option' onClick={() => setActiveRoute(name)}>
            <div className="option__textwrapper textwrapper">
                <span className="textwrapper__text">{name}</span>
            </div>
        </div>
    );

    const navOptionLink = (
        <Link to={actualPath}>
            {navOption}
        </Link>
    );

    return navOptionLink;
}

export default NavOption;
