import styled from "styled-components";
import {ReactComponent as bath} from '../../assets/icon/bath.svg'
import {ReactComponent as bed} from '../../assets/icon/bed.svg'
import {ReactComponent as car} from '../../assets/icon/car.svg'
import {ReactComponent as ruler} from '../../assets/icon/ruler.svg'
import {ReactComponent as resize} from '../../assets/icon/resize.svg'
import {ReactComponent as love} from '../../assets/icon/love.svg'
 
const Container=styled.div`
height: 430px;
max-width: 380px;
min-width: 320px;
border-radius: 3px;
overflow: hidden;
border: 1px solid #999;
`
const Image =styled.img`
width: 100%;
height: 220px;
min-height: 220px;
max-height: 220px;
`
const Content =styled.div`
padding: 20px;
`

const Swagger=styled.div`
display: flex;
justify-content: space-between;
padding-top:${({footer})=>footer ? '0' :'15px'}  ;
`
Swagger.Bath=styled(bath)``
Swagger.Bed=styled(bed)``
Swagger.Car=styled(car)``
Swagger.Ruler=styled(ruler)``
Swagger.Resize=styled(resize)``
Swagger.Love=styled(love)`
margin-left: 10px;
width:35px;
height:35px;
background: #F6F8F9;
padding:10px;
border-radius:50%;
cursor: pointer;
.active{
    transform: scale(0.9);
}`


Swagger.Item=styled.div`
display: flex;
flex-direction: ${({footer})=>footer? 'row' :'column'} ;
align-items: center;
`
const Line =styled.div`
height: 2px;
background: #E6E9EC;`

export{Container,Image,Content,Swagger,Line}