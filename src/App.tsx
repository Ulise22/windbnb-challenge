import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import data from './assets/stays.json'
import { Household } from './types/types'
import './App.css'
import './Apartment.css'
import Footer from './components/footer/Footer'

export default function App () {
  const [staysQuantity, setStaysQuatitiy] = useState(6)
  return(
    <main className='main'>
      <Navbar />
      <header className='header'>
        <h1 className='title'>Stays in Finland</h1>
        <span onClick={() => setStaysQuatitiy(data.length)} className='staysquantity'>12+ stays</span>
      </header>

      <section className='apartment__container'>
        { data.slice(0, staysQuantity).map((items: Household ) => {
          return(
            <article className='apartment' key={crypto.randomUUID()}>
              <img className='apartment__img' src={items.photo} alt={items.title} />
              <section className='apartment__content'>
                  <div className='apartment__content__details'>
                      {items.superHost && <span className='apartment__superhost'>SUPER HOST</span>}
                      <p className='apartment__type'> {items.type} {items.beds && <p> . {items.beds} beds </p> } </p>
                  </div>
                  <div className='apartmen__content__rating'>
                    <span className="material-icons star">star</span> 
                    <p>{ items.rating }</p>
                  </div>
              </section>
              <h4 className='apartment__title'> {items.title} </h4>
            </article>
            )
        })}
      </section>

      <Footer />
    </main>
  )
}