import styled from "styled-components";
import {ReactComponent as arrow} from '../../assets/icon/arrow.svg'

const Container=styled.div`
max-height: 571px;
position: relative;
width: 100%;
`

const Arrow=styled(arrow)`
width: 45px;
height: 45px;
padding: 15px;
border-radius: 50%;
background: rgba(255,255,255,0.4);
cursor: pointer;
position: absolute;
top: 50%;
left:${({left})=> left && '20px'};
right:${({left})=> !left && '20px'};
transform: ${({left})=> left ? 'rotate(0deg)':'rotate(180deg)'};
`
const ArrowLeft=styled(arrow)`
width: 45px;
height: 45px;
padding: 15px;
border-radius: 50%;
background: rgba(255,255,255,0.4);
cursor: pointer;
position: absolute;
top: 50%;
left:${({right})=> !right && '20px'};
/* right:${({right})=> right && '20px'}; */
/* transform: ${({left})=> left ? 'rotate(0deg)':'rotate(180deg)'}; */
`
const Blur =styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
background-color: rgba(0,0,0,0.5);
`
const Content=styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
`
Content.Title=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;`

Content.SubTitle=styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`
Content.Price=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
`

const Image=styled.img`
  width:100%;
 height:571px;`
export{Container, Arrow, Image, Blur, Content,ArrowLeft}