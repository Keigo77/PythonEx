import CardContent from './CardContent'

function Card({sections}){
    return(
        <>
            {sections.map((section) => (
                <div className='card' key={section.id}>
                    <h2 className='card-title'>{section.title}</h2>
                    
                    {section.contents.map((content, index) => (
                        <CardContent key={index}
                        // link の値に三項演算子を直接適用します
                        link={(!content.openDate || (content.openDate && new Date(content.openDate) < Date.now())) ? content.link : ''}
                        name={content.name}
                        />
                    ))}
                </div>
            ))}
        </>
    )
}

export default Card