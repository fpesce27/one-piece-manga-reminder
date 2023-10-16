import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { ShowMangaPanel } from './ShowMangaPanel';

interface Props {
  images: string[]
}

function ShowChapter({ images }: Props) {

  return (
    <div style={{height:'100vh'}}>
      <Carousel
        autoFocus
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        useKeyboardArrows
        transitionTime={0}
      >
        
        {images.map((image, index) => (
          <div style={{height:'100vh'}} key={index}>
            <ShowMangaPanel image={image} />
          </div>
        ))}
        
      </Carousel>
    </div>
  )
}

export default ShowChapter
