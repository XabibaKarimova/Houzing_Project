import React from 'react'

import { PropertiesProvider } from './properties';


export const RootContext = ({children}) => {
  return (

       <PropertiesProvider>
        {children}
       </PropertiesProvider>
  
  )
}
export default RootContext;