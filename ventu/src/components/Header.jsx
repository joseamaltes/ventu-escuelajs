import Rect from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import cartIcon from '../assets/static/icons/cartIcon.png';
import userIcon from '../assets/static/icons/userIcon.png';

 
const Header = () => {

return (

<div className='Header__container'>
  <div className= 'Header__superior--container'>
    <div className='site--logo'>
      <h1><a>VENTU</a></h1>
    </div>
    <div className='cart__container'>
      <div className='userIcon'>
        {userIcon}
      </div>
      <div className='cartIcon'>
        {cartIcon}
      </div>
    </div>
  </div>

  <div className='Header__inferior--container'>
    <div className='Header__menu'>
      <li>Home</li>
      <li>Sobre nosotros</li>
      <li>Tienda</li>
      <li>FAQ</li>
      <li>Contacto</li>
    </div>
  </div>
</div>

);
};

export default Header;