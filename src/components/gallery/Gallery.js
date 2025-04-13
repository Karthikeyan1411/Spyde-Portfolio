import React, { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion';

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import './Gallery.css'
import usePageTitle from '../usePageTitle'

const Gallery = (props) => {

    usePageTitle();

    const [selectedImg, setSelectedImg] = useState(null);
    const containerRef = useRef(null);

    const handleClickOutside = (e) => {
        if (selectedImg && containerRef.current && !containerRef.current.contains(e.target)) {
            setSelectedImg(null);
        }
    };

    useEffect (() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImg]);

  return (
    <section 
        className="gal-container"
    >
        <h2 
        className='gal-head'
        >
            Gallery
            </h2>
        {/* <div className="head-bottom"></div> */}
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 420: 2, 600: 3, 750: 4, 900: 5}}
        >
        <Masonry 
            className="gallery" 
            gutter='10px'
        >
            {
                props.galData.map((item) => {
                    const isZoomed = selectedImg === item.id;
                    return (
                        <div 
                        key={item.id} 
                        className={`zoom-wrapper ${isZoomed ? 'zoomed' : ''}`}
                        ref={isZoomed ? containerRef : null}
                        onClick = {() => setSelectedImg(item.id)}
                        >
                            <img 
                        src={`/images/gallery/${item.img}.webp`}
                        alt={item.altImg} 
                        className='pics'
                        loading='lazy'
                        />
                        </div>
                );
                })}
        </Masonry>
        </ResponsiveMasonry>

        {selectedImg && <div className="backdrop-blur"></div>}
    </section>
  )
}

export default Gallery