import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function MyForm(){

  return(
    
    <label><input 
    type='text' 
    name='myInput' 
    placeholder='Text Input'
    style={{width: '720px', height: '100px'}}/></label>
  );
}
