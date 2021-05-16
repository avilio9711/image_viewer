//contains frame for image and input for image uploading

import React, {useState} from 'react'
import Frame from './Frame'

const Viewer = () => {
    
    const [image, setImage] = useState(null)

    //sets the image path
    const handleImageChange = (e) => {
        // method takes an object (like our file) and creates a temporary local URL
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div>
            <Frame image={image}/>
            <div className='form-control input'>
                <label htmlFor='file'>Choose image to upload</label>
                <input type='file' id='file' name='file' accept='image/*' onChange={handleImageChange}/>
            </div>       
        </div>
    )
}

export default Viewer
