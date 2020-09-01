import React,{Component} from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item'

class Directory extends Component {
constructor(){
  super()
 this.state = {
   sections: [
    {
      title: 'earrings',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/unique-shop-228b3.appspot.com/o/earrings.jpg?alt=media&token=a2d6ee97-43cf-439a-b5d4-c273db710bbe',
      id: 1,
      linkUrl: 'shop/earrings'
    },
    {
      
      
      title: 'brooches',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/unique-shop-228b3.appspot.com/o/brooch.jpg?alt=media&token=9dd1b553-0829-40ef-9fa9-6243aedccaf5',
      id: 2,
      linkUrl: 'shop/brooches'
    },
    {
      title: 'rings',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/unique-shop-228b3.appspot.com/o/ring.jpeg?alt=media&token=6afe5920-3641-494d-9dab-23fc790fc305',
      id: 3,
      linkUrl: 'shop/rings'
    },
    {
      title: 'bracelets',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/unique-shop-228b3.appspot.com/o/neclases.jpeg?alt=media&token=a7fbf1c3-b602-4f99-97f4-e0d23a93298d',
      size: 'large',
      id: 4,
      linkUrl: 'shop/bracelets'
    },
    {
      title: 'necklaces',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/unique-shop-228b3.appspot.com/o/neclase.jpg?alt=media&token=db566e41-7d96-4c88-bf04-1d0938794a93',
      size: 'large',
      id: 5,
      linkUrl: 'shop/necklaces'
    }
  ]

  }
}
render(){
  return(
    <div className='directory-menu'>
      {this.state.sections.map(({title, imageUrl,size,id})=> (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>))}
    </div>
  )
}

}

export default Directory
