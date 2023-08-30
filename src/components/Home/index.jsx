
import React,{useState,useEffect} from 'react'
import CarouselCard from '../Carousel'
import CarouselCategory from '../CarouselCategory'

import { Container } from './style'


export const Home = () => {
 
  return (
    <Container>
      <CarouselCard/>
      
      <CarouselCategory/>
     
   
    
    </Container>
  )
}
export default Home