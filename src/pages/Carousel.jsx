
import {} from 'react'
import Image from "react-image-gallery"
import './style/carousel.css'
import "react-image-gallery/styles/css/image-gallery.css"
const Carousel = () => {
    const img=[
        {
            original:"https://www.inabaweb.com/wp-content/uploads/2023/09/Tamanos-de-pantallas-de-las-Laptops-1072x660.png"
        },
        {
            original:"https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2022/6/30/a751cb634fcf303a18782f156241b52c0d11822e.png"
        },{
            original:"https://i.blogs.es/5165b0/surface-laptop-3-115/1366_2000.jpg"
        },{
            original:"https://es.digitaltrends.com/wp-content/uploads/2021/05/dell-xps-13-9310-featured-image.jpg?p=1"
        }
    ]
  return (
    <div>
        <Image
        items={img}
        />
  
      
    </div>
  )
}

export default Carousel
