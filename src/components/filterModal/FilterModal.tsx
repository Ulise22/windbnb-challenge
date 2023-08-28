import './FilterModal.css'

export default function FilterModal ({isOpen}: {isOpen: string}) {
    if(isOpen === 'none') return

    return(
        <div className='modal'>
            <section className='filtermodal'>
                <article className='filtermodal__btns'>
                    <div>
                        <b>LOCATION</b>
                        <p>Add location</p>
                    </div>
                    <div>
                        <b>GUEST</b>
                        <p>Add guest</p>
                    </div>
                    <button>
                        <span className="material-icons">search</span>
                        Search
                    </button>
                </article>

                {isOpen == 'Location' ?
                    <ul>
                        <li>
                            <span className="material-icons">location_on</span>
                            Heilsinki, Finland
                        </li>
                        <li>
                            <span className="material-icons">location_on</span>
                            Turku, Finland
                        </li>
                        <li>
                            <span className="material-icons">location_on</span>
                            Oulu, Finland
                        </li>
                        <li>
                            <span className="material-icons">location_on</span>
                            Vaasa, Finland
                        </li>
                    </ul>
                
                :
                    <section>
                        <article>
                            <h5>Adults</h5>
                            <p>Ages 13 or above</p>
                            <div>
                                <button>
                                    <span className="material-icons">remove</span>
                                </button>
                                <h4>0</h4>
                                <button>
                                    <span className="material-icons">add</span>
                                </button>
                            </div>
                        </article>
                        <article>
                            <h5>Children</h5>
                            <p>Ages 2-12</p>
                            <div>
                                <button>
                                    <span className="material-icons">remove</span>
                                </button>
                                <h4>0</h4>
                                <button>
                                    <span className="material-icons">add</span>
                                </button>
                            </div>
                        </article>
                    </section>}
            </section>
        </div>
    )
}