import styled from "styled-components";
import {BsSearch} from 'react-icons/bs'
import {VscSettings} from 'react-icons/vsc'
import {ReactComponent as homes} from '../../assets/icon/homes.svg'

export const Container=styled.div`

padding: var(--padding);
padding-top: 15px;
padding-bottom: 15px;
display: flex;
align-items: center;
gap: 20px;
width: 100%;
max-width:1440px;
margin: auto;
`
export const Icon=styled.div`

`
Icon.Search=styled(BsSearch)`
margin-right: 10px;
`
Icon.Setting=styled(VscSettings)`
margin-right: 10px;
transform: rotate(90deg);
color: #0061DF;
`
Icon.Home=styled(homes)`
margin-right: 10px;

`
export const Wrapper=styled.div`
/* border:1px solid #aaa; */
padding:30px;
border-radius:5px;`

export const Section=styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
/* background: ${({footer})=>footer? "#eee":'#fff'}; */
justify-content:${({footer})=>footer? "flex-end":'flex-start'} ;
padding:${({footer})=>footer? "20px":'0px'} ;
`