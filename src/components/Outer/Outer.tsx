import React from 'react'
type Props = {
  children: React.ReactNode
}

const Outer = (props: Props) => {
  return (
    <div>
      <div className="nav">
        {props.children}
      </div>
    </div>
  )
}

export default Outer