import logo from '../../assets/logo.png'
import './Navbar.css'

export default function Navbar ({changeIsOpen}: {changeIsOpen: Function}) {
    return(
        <nav className='navbar'>
            <img className='navbar__logo' src={logo} alt='windbnb' />
            
            <article className='navbar__btn__container'>
                <p onClick={() => changeIsOpen('Location')} className='navbar__btn'>Add location</p>
                <div className='navbar__btn__border'></div>
                <p onClick={() => changeIsOpen('Guest')} className='navbar__btn'>Add guest</p>
                <div className='navbar__btn__border'></div>
                <span className="material-icons search">search</span>
            </article>
        </nav>
    )
}