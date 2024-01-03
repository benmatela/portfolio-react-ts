import React from "react";

export const Pill = (props: any) => {
  return props.items.map((item: any, index: number) => {
    return (
      <span
        key={item.name}
        className={`inline-block bg-orange-600 size rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
      >
        #{item.name}
      </span>
    );
  });
};
