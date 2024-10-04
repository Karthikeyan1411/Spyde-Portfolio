import React from 'react'

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import './Gallery.css'
import usePageTitle from '../usePageTitle'

const Gallery = (props) => {

    usePageTitle();

  return (
    <section 
        className="gal-container"
    >
        <h2 className='gal-head'>Gallery</h2>
        <div className="head-bottom"></div>
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 420: 2, 600: 3, 750: 4, 900: 5}}
        >
        <Masonry 
            className="gallery" 
            gutter='10px'
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
        </Masonry>
        </ResponsiveMasonry>
    </section>
  )
}

export default Gallery