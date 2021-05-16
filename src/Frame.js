//Frame where image will be displayed

import React, {useState} from 'react'

const Frame = ({image}) => {

    const [scale, setScale] = useState(1)
    const [position, setPosition] = useState({x:0, y: 0})

    //handle zoom functionality by setting scale (used for zooming) and position (zoom area)
    const handleMouseWheel = (e) => {
        const rect = e.target.getBoundingClientRect();
        let top = e.pageY - (rect.top + window.scrollY)
        let left = e.pageX - (rect.left + window.scrollX)
        setPosition({ x: left, y: top })
        if (e.deltaY > 0 && scale > 0.6) {
            setScale(scale-0.02)
        }
        else if(e.deltaY < 0 && scale < 1.5) {
            setScale(scale+0.02)
        }
    }

    let showImage = ''
    const styles = {
        transform: `scale(${scale})`,
        transformOrigin: scale < 1.2 ? 'center' : `${position.x}px ${position.y}px`
    };
    if(image !== null) {
        showImage = <img className='image' style={styles} alt='' src={image} />
    }

    return (
        <div className='frame' onWheel={handleMouseWheel}>
            {showImage}
        </div>
    )
}

export default Frame
