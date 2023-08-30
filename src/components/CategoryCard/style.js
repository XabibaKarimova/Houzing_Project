import styled from "styled-components";

const Container=styled.div`
position: relative;
height: 350px;
max-width: 280px;
min-width: 280px;
border-radius: 3px;
overflow: hidden;
border: 1px solid #999;
display: flex;
justify-content: center;
align-items: center;
`
const Image =styled.img`
width: 100%;
height: 350px;
min-height: 350px;
max-height: 350px;
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
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color:#fff;
`





export{Container,Image,Blur,Content}