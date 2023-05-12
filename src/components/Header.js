import { NavLink } from 'react-router-dom';
import homeHeader from '../assets/homeHeader.png'

const Header = () => {
    return (
        <div  >
            <NavLink to="/">
                <img src={homeHeader} alt="Home" />
            </NavLink>

        </div>
    );
}

export default Header;  



