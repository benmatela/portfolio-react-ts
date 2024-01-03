import React from "react";

export const PortfolioLink = (props: any) => {
  return props.links.map((link: any, index: number) => {
    return (
      <div className="mt-5">
        <a
          key={link.name}
          className="font-medium mb-5 text-[#1a1a1a]"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      </div>
    );
  });
};
