import React from "react";

export interface Props {
  name?: string;
}

export const Message = (props: Props) => (
  <div>Hello {props.name ?? "world"}</div>
);
