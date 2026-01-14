import React from 'react'

const User = (props) => {
  return (
    <div style={{ color: 'white' }}>
        User Component={props.name} Age={props.age}
    </div>
  )
}

export default User
