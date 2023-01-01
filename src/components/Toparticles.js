import React from 'react'

export default function Toparticles(props) {
    return (
        <>
            <div className='top-article'>
                <ul className="list-group">
                    <h3 className='top-list-article-symbol'><b>⇨</b></h3>
                    <li className='top-article-list' >
                        <a href={props.toplinks}><b>{props.desc}</b></a>
                    </li>
                </ul>
            </div>
        </>
    )
}
