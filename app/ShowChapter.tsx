import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from "@nextui-org/react";
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
        
        {images.map((image) => (
          <div style={{height:'100vh'}}>
            <ShowMangaPanel image={image} />
          </div>
        ))}
        
      </Carousel>
    </div>
  )
}

export default ShowChapter
