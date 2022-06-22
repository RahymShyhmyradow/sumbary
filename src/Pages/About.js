import React from 'react'
import { LightgalleryItem } from "react-lightgallery";
import { LightgalleryProvider } from "react-lightgallery";
function About() {
  return (
    <LightgalleryProvider>
      <div className='flex md:w-3/4 bg-red-500 w-full md:mt-5 mt-0' style={{ height: '999px' }}>
        <LightgalleryItem src="https://picsum.photos/1024/768?image=2">
          <img src="https://picsum.photos/200/300?image=2" />
        </LightgalleryItem>
        <LightgalleryItem src="https://picsum.photos/1024/768?image=2">
          <img src="https://picsum.photos/200/300?image=2" />
        </LightgalleryItem>
        <LightgalleryItem src="https://picsum.photos/1024/768?image=2">
          <img src="https://picsum.photos/200/300?image=2" />
        </LightgalleryItem>
      </div>
    </LightgalleryProvider>
  )
}

export default About
