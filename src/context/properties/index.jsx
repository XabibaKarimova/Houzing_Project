import React, { useReducer } from 'react'
import { createContext } from 'react'
import { reducer } from './reduser'

const PropertiesContext=createContext()

export const PropertiesProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <PropertiesContext.Provider>{children}</PropertiesContext.Provider>
  )
}
