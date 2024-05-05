import { NavLink } from "react-router-dom";

export const Header = () => {
  const isActiveCallback = ({isActive}) => isActive ? 'menu__link menu__link_active' : 'menu__link';

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">

          <li className="menu__item">
            <NavLink to="/" className={ isActiveCallback }>Home</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/about" className={ isActiveCallback }>About</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/blog" className={ isActiveCallback }>Blog</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/contacts" className={ isActiveCallback }>Contacts</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};