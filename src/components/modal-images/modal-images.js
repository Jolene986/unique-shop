import React from 'react'
import ImageGallery from 'react-image-gallery';

const ModalImages = ({images}) => {
  let formatedImages = [];

  images && images.map(image=> formatedImages.push({
    original: image,
    thumbnail:image
  }))
  return (
    <div className='product-images'>
<ImageGallery items={formatedImages} showPlayButton={false } onErrorImageURL={'https://firebasestorage.googleapis.com/v0/b/unique-shop-228b3.appspot.com/o/brooch.jpg?alt=media&amp;token=9dd1b553-0829-40ef-9fa9-6243aedccaf5'}/>
    </div>
  )
}

export default ModalImages
