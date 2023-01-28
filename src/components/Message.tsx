import React from "react";
import styles from "./Message.module.scss";

export interface Props {
  name?: string;
}

export const Message = (props: Props) => (
  <div className={styles.message}>Hello {props.name ?? "world"}</div>
);
