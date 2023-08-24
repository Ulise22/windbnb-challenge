import { Household } from "../../types/types"
import '../../Apartment.css'


export default function Apartment ({item}: {item: Household}) {
console.log(item)

    return(
        <article className='apartment' key={crypto.randomUUID()}>
            <img className='apartment__img' src={item.photo} alt={item.title} />
            <section className='apartment__content'>
                <div className='apartment__content__details'>
                    {item.superHost && <span className='apartment__superhost'>SUPER HOST</span>}
                    <p className='apartment__type'> {item.type} {item.beds && <p> . {item.beds} beds </p> } </p>
                </div>
                <div className='apartmen__content__rating'>
                <span className="material-icons star">star</span> 
                <p>{ item.rating }</p>
                </div>
            </section>
            <h4 className='apartment__title'> {item.title} </h4>
        </article>
    )
}