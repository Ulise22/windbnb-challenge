import './FilterModal.css'

export default function FilterModal ({isOpen}: {isOpen: boolean}) {
    if(!isOpen) return

    return(
        <div className='modal'>
            <section className='filtermodal'></section>
        </div>
    )
}