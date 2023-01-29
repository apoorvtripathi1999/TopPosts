import React from 'react'

export default function Article(props) {
    return (
        <>
            <div className='article-main'>
                <div className="card">
                    <img src={props.imageUrl} className="card-img-top card-image" alt="..." />
                    <div className="card-body article-body">
                        <p className="card-text my-2 mx-2">{props.description}</p>
                        <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-primary my-2">Read More</a>
                    </div>
                </div>

            </div>

        </>
    )
}
