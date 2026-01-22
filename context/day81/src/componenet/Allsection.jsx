import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Allsection = (props) => {
  console.log(props.children);
  
  return (
    <div>
      <h1>AllSection</h1>
      <h2>{props.children}</h2>
        <Section1/>
        <Section2/>
    </div>
  )
}

export default Allsection