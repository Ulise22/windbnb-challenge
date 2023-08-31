import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import data from './assets/stays.json'
import { Household } from './types/types'
import './App.css'
import Footer from './components/footer/Footer'
import FilterModal from './components/filterModal/FilterModal'
import Apartment from './components/apartment/Apartment'

export default function App () {
  const [staysQuantity, setStaysQuatitiy] = useState(6)
  const [guests, setGuests] = useState(0)
  const [location, setLocation] = useState('')
  const [isOpen, setIsOpen] = useState('none')
  return(
    <main className='main'>
      <Navbar location={location} guests={guests} changeIsOpen={setIsOpen} />
      <FilterModal guests={guests} changeGuests={setGuests} location={location} changeLocation={setLocation} changeIsOpen={setIsOpen} isOpen={isOpen} />
      <header className='header'>
        <h1 className='title'>Stays in Finland</h1>
        <span onClick={() => setStaysQuatitiy(data.length)} className='staysquantity'>12+ stays</span>
      </header>

      <section className='apartment__container'>
        { data.slice(0, staysQuantity).map((items: Household ) => <Apartment key={crypto.randomUUID()} item={items} />)}
      </section>

      <Footer />
    </main>
  )
}