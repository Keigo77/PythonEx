import '../App.css'

function CardContent({link, name}){
    return(
        <>
            <a href={link}>
                <p className='card-content'>{name}</p>
            </a>
        </>
    )
}

export default CardContent