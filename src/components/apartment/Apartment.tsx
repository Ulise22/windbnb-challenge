import { Household } from "../../types/types"


export default function Apartment (item: Household) {
console.log(item)

    return(
        <article>
            <img src={item.photo} alt={item.title} />
            <section>
                <div>
                    {item.superHost && <span>SUPER HOST</span>}
                    <p> {item.type}{item.beds && <p> . {item.beds} beds </p> } </p>
                </div>
            </section>
        </article>
    )
}