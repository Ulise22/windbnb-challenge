import { useState } from 'react'
import './FilterModal.css'

export default function FilterModal ({isOpen, changeIsOpen, guests, changeGuests, location, changeLocation}: {isOpen: string, changeIsOpen: (isOpen: string) => void, guests: number, changeGuests: (guests: number) => void, location: string, changeLocation: (location: string) => void}) {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    if(isOpen === 'none') return


    const addGuests = (isAdult: boolean) => {
        changeGuests(guests+1)
        isAdult ? setAdults(adults+1) : setChildren(children+1)
    }

    const restGuest = (isAdult: boolean) => {
        if(guests > 0) {
            if(isAdult) {
                if(adults > 0) {
                    setAdults(adults-1)
                    changeGuests(guests-1)
                }
            } else {
                if(children > 0) {
                    setChildren(children-1)
                    changeGuests(guests-1)
                }
            }
        }
    }

    return(
        <div className='modal'>
            <section className='filtermodal'>
                <article className='filtermodal__btns'>
                    <div onClick={() => changeIsOpen('Location')} className={isOpen === 'Location' ? 'activeFilter filtermodal__btn' : 'filtermodal__btn'}>
                        <b className='filtermodal__btn__b'>LOCATION</b>
                        <p className='filtermodal__btn__p'> {location === '' ? <>Add location</> : <b> {location}, Finland </b>} </p>
                    </div>
                    <div onClick={() => changeIsOpen('Guest')} className={isOpen === 'Guest' ? 'activeFilter filtermodal__btn' : 'filtermodal__btn'}>
                        <b className='filtermodal__btn__b'>GUEST</b>
                        <p className='filtermodal__btn__p'>{ guests === 0 ? <>Add guest</> : <b>{guests}</b>  }</p>
                    </div>
                    <button onClick={() => changeIsOpen('none')} className='filtermodal__searchbtn'>
                        <span className="material-icons">search</span>
                        Search
                    </button>
                </article>

                <article className='functionalities__container'>
                    <ul className={isOpen == 'Location' ? 'location__container' : 'location__container hide'}>
                        <li className='location__item' onClick={() => changeLocation('Helsinki')}>
                            <span className="material-icons">location_on</span>
                            Heilsinki, Finland
                        </li>
                        <li className='location__item' onClick={() => changeLocation('Turku')}>
                            <span className="material-icons">location_on</span>
                            Turku, Finland
                        </li>
                        <li className='location__item' onClick={() => changeLocation('Oulu')}>
                            <span className="material-icons">location_on</span>
                            Oulu, Finland
                        </li>
                        <li className='location__item' onClick={() => changeLocation('Vaasa')}>
                            <span className="material-icons">location_on</span>
                            Vaasa, Finland
                        </li>
                    </ul>
                    <section className={isOpen == 'Guest' ? 'guest__container' : 'guest__container hide'}>
                        <article className='guest'>
                            <h5 className='guest__title'>Adults</h5>
                            <p className='guest__desc'>Ages 13 or above</p>
                            <div className='guest__btncontainer'>
                                <button className='guest__btn' onClick={() => restGuest(true)}>
                                    <span className="material-icons">remove</span>
                                </button>
                                <h4 className='guest__quantity'> {adults} </h4>
                                <button className='guest__btn' onClick={() => addGuests(true)}>
                                    <span className="material-icons">add</span>
                                </button>
                            </div>
                        </article>
                        <article className='guest'>
                            <h5 className='guest__title'>Children</h5>
                            <p className='guest__desc'>Ages 2-12</p>
                            <div className='guest__btncontainer'>
                                <button className='guest__btn' onClick={() => restGuest(false)}>
                                    <span className="material-icons">remove</span>
                                </button>
                                <h4 className='guest__quantity'> {children} </h4>
                                <button className='guest__btn' onClick={() => addGuests(false)}>
                                    <span className="material-icons">add</span>
                                </button>
                            </div>
                        </article>
                    </section>
                </article>
            </section>
        </div>
    )
}