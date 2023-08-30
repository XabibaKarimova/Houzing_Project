import React, { useEffect,useState } from 'react'
import {  Container } from './style'
import CategoryCard from '../CategoryCard'
import Slider from "react-slick";

const { REACT_APP_BASE_URL:url}=process.env;

export const CarouselCategory= () => {
   
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch(`${url}/categories/list`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data || [])
    })
  },)

  const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
       };
  
     
  return (
    <Container>
        
    <Slider {...settings}>
    {data.map((value)=>{
        return  <CategoryCard data={value}/>
      })}
    </Slider>
    </Container>
  )
}
export default CarouselCategory

// import React, { Component } from "react";
// 

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
