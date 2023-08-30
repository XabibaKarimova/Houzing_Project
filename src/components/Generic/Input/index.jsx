import React,{forwardRef} from 'react'
import { Container,Icon,Wrapper } from './style'

const Input=forwardRef(({ 
  children,
  type,
  Icons,
  width,
  height,
  icon,
  onChange,
  placeholder,
  name,
  value,
  defaultValue },ref)=>{
    return (
      <Wrapper>
        <Icon>{Icons}</Icon>
      <Container 
      placeholder={placeholder} 
      onChange={onChange} 
      name={name}
      ref={ref}
      defaultValue={defaultValue}
      value={value}
      type={type} 
      width={width}
      icon={icon}
      height={height}
      >{children}</Container ></Wrapper>
    )
  })
export default Input