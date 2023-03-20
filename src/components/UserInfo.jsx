import React from "react";
import { Avatar } from "./Avatar";

export const UserInfo = (props) => {
  return (
    <div>
      <h3>{props.user.name}</h3>
      <Avatar user={props.user}/>
    </div>
  );
};
