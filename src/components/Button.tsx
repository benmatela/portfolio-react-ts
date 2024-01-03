import React from "react";

export const Button = (props: any) => {
  return (
    <div
      onClick={() => {}}
      id="button"
      data-testid="button"
      className={props.className}
    >
      {props.label}
    </div>
  );
};
