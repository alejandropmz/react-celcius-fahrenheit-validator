import React from 'react'

export const Avatar = (props) => {
  return (
    <div>
      <img src={props.user.avatarUrl} alt={props.user.name} />
    </div>
  )
}
