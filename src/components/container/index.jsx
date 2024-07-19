import { useState } from 'react'
import './app.css'
import { PersonalDetails } from '../personal-details'

export const App = () =>{
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonalDetails />
    </>
  )
}

