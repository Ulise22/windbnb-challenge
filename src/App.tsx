import './App.css'
import Navbar from './components/navbar/Navbar'
import data from './assets/stays.json'

export default function App () {
  return(
    <main>
      <Navbar />
      <h1>Stays in Finland</h1>
      <span>12+ stays</span>

      { data.map(item => {
        return(
          <article key={crypto.randomUUID()}>
            <h2> {item.title} </h2>
          </article>
        )
      })}
    </main>
  )
}