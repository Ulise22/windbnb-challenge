import './FilterModal.css'

export default function FilterModal ({isOpen}: {isOpen: boolean}) {
    if(!isOpen) return

    return(
        <section>
            <h2>Modal</h2>
        </section>
    )
}