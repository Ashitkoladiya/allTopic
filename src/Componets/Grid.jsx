import React from 'react'

function Grid(props) {
  return (
    <div>
      <p>hello {props.name} ... {props.newname}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Grid
