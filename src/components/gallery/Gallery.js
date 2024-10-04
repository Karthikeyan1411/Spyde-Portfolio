import React from 'react'

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import './Gallery.css'
import usePageTitle from '../usePageTitle'

const Gallery = (props) => {

    usePageTitle();

  return (
    <section className="gal-container" style={{padding: '10px'}}>
        <h2 className='gal-head'>Gallery</h2>
        <div className="head-bottom"></div>
        <ResponsiveMasonry
            // columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
        <Masonry 
            className="gallery" 
            gutter='20px'
        >
            {
                props.galData.map((item) => (
                    <img
                        key={item.id} 
                        src={`/images/gallery/${item.img}.webp`}
                        alt={item.altImg} 
                        className='pics'
                        loading='lazy'
                        // style={{width: "100%", display: "block", cursor: "pointer"}}
                    />
                ))
            }
        </Masonry>
        </ResponsiveMasonry>
    </section>
  )
}

export default Gallery