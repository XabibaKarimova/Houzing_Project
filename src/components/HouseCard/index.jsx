
import React from 'react'
import { Container, Content, Image, Swagger,Line } from './style'
import noImg from '../../assets/img/noimg.jpg'



export const HouseCard = ({data={}}) => {
const { 
  
  city,
  country,
  description, 
  address,
  houseDetails,
  salePrice,
  price,
  attachments,
  category


}=data


  return (
    <Container>
      <Image src={attachments && attachments[0].imgPath
 || noImg} alt='#' />
      <Content>
        <div className="subTitle inline">{city}, {country}, {description}</div>
        <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'}, {category?.name || 'Category'}</div>
        <Swagger>
          <Swagger.Item>
            <Swagger.Bath />
            <div className="info">{houseDetails.bath|| 0} bath</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Bed />
            <div className="info">{houseDetails.beds || 0} bed</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Car />
            <div className="info">{houseDetails.garage|| 0} garage</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Ruler />
            <div className="info">{houseDetails.area || 0} Sq Ft</div>
          </Swagger.Item>
        </Swagger>
      </Content>
      <Line/>
      <Content>
        <Swagger footer>
          <Swagger.Item>
           <div className="info">${salePrice}/mo</div>
           <div className="subTitle">${price}/mo</div>
          </Swagger.Item>
          <Swagger.Item footer  >
          <Swagger.Resize/>
          <Swagger.Love/>
          </Swagger.Item>

        </Swagger>
        
      </Content>
    </Container>
  )
}
export default HouseCard
