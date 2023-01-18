import './GridItem.css'

export const GridItem = ( { url, alt_description }: Properties ) => {
    return (
        <div className='col-md-5 col-sm-12 item m-1 d-flex justify-content-center align-items-center g-0'>
            <img src={url} className='img-fluid' />
        </div>
    )
}

interface Properties {
    url: string,
    alt_description: string,
}