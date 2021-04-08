import './Header.scss';
import navOptions from './navOptions';
import logoCSM from '../../assets/logo.png';
import NavOption from '../NavOption';
import { useState } from 'react';

function Header() {   
    const [activeRoute, setActiveRoute] = useState('Historical');
    const role='watcher';
    
    return (
        <header className="header">
        <div className="header__logo">
          <img src={logoCSM} 
            alt="imagen no disponible" 
            title="CSM Model Studio"  
            width="120px"/>
        </div>
        <div className="header__nav nav">
        {
            navOptions && navOptions.filter((option, key) => {
              
                if(option.role.includes(role)){
                  return true;
                }
                else return false;
              
            }).map((option, key) => {
                return (
                    <NavOption setActiveRoute={setActiveRoute}
                        urlPath={option.urlPath}
                        name={option.name}
                        key={key} />
                );
            })
        }
        </div>
      </header>
    );
}

export default Header;
