import React from 'react'

interface Paramas {
    title:string,
    variant?:string,
    click?:()=>void
}

function MyButton({title,variant = "default-btn",click}:Paramas):JSX.Element {
  return (
    <button onClick={click} className={variant}>{title}</button>
 )
}

export default MyButton