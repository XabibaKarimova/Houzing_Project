import React from 'react'
import {  Outlet , useNavigate} from 'react-router-dom'
import { Container, Logo, Section, Wrapper,Link, Main } from './style'
import {navbar} from '../../utils/navbar'
import Button from '../Generic/Button'
import Filter from '../Filter'


export const Home = () => {
  const navigate=useNavigate();
  return (
    <Container>
      <Main>
      <Wrapper>
        <Section logo onClick={() => navigate('/home')}>
          <Logo/>
          <h3>Houzing</h3>
        </Section>
        <Section>
         {
          navbar.map(({title,path,hidden},index)=>{
            return !hidden &&  (
              <Link className={({isActive})=>isActive&&'active'} key={index} to={path}>{title}</Link>
            )
          })
         }
        </Section>
        <Section>
          <Button onClick={()=>navigate('/singIn')} type='dark'>Login</Button>
        </Section>
      </Wrapper>
      </Main>
      <Filter/>     
      <Outlet />
    </Container>
  )
}
export default Home