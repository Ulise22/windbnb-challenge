import logo from '../../assets/logo.png'
import './Navbar.css'

export default function Navbar ({changeIsOpen, location, guests}: {changeIsOpen: (isOpen: string) => void, location: string, guests: number}) {
    return(
        <nav className='navbar'>
            <img className='navbar__logo' src={logo} alt='windbnb' />
            
            <article className='navbar__btn__container'>
                <p onClick={() => changeIsOpen('Location')} className='navbar__btn'> {location == '' ? <>Add location</> : <b> {location}, Finland </b>} </p>
                <div className='navbar__btn__border'></div>
                <p onClick={() => changeIsOpen('Guest')} className='navbar__btn'> {guests == 0 ? <>Add guest</> : <b> {guests} guests </b>} </p>
                <div className='navbar__btn__border'></div>
                <span className="material-icons search">search</span>
            </article>
        </nav>
    )
}