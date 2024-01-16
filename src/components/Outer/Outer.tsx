import React from 'react'
type Props = {
  children: React.ReactNode
}

const Outer = (props: Props) => {
  return (
    <div>
      <div id = "nav">
        {props.children}
      </div>
      <div></div>
    </div>
  )
}

export default Outer