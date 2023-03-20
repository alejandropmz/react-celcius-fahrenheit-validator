import React from 'react'
import { UserInfo } from './UserInfo'

export const Comment = (props) => {
  return (
    <div>
      <h1>{props.comment}</h1>
      <UserInfo user={props.user} />
    </div>
  )
}

/* 
text
name
avatarurl
date
*/