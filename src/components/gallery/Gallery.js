import React from 'react'

import './Gallery.css'
import usePageTitle from '../usePageTitle'

const Gallery = (props) => {

    usePageTitle();

  return (
    <section className="gal-container">
        <h2 className='gal-head'>Gallery</h2>
        <div className="head-bottom"></div>
        <div 
            className="gallery" 
        >
            {
                props.galData.map((item) => (
                    <img
                        key={item.id} 
                        src={`/images/gallery/${item.img}.webp`}
                        alt={item.altImg} 
                        className='pics'
                        loading='lazy'
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Gallery