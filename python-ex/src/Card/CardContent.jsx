import '../App.css'

function CardContent({link, name}){
    return(
        <>
            {link ? 
                (
                <a href={link}>
                    <p className='card-content'>{name}</p>
                </a>
                ) : (<p className='card-content'>{name}</p>)
            }
        </>
    )
}

export default CardContent