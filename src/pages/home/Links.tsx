import React from "react";
import { PortfolioLink } from "../../components/PortfolioLink";

export const Links = () => {
  const links = [
    {
      name: "www.dreamshare.com",
      url: "https://benmatela.github.io/dreamshare",
    },
    {
      name: "react-ts-tensorflow",
      url: "https://benmatela.github.io/react-ts-tensorflow/",
    },
    {
      name: "www.react-ts-firebase-crud-redux.com",
      url: "https://benmatela.github.io/react-ts-firebase-crud-redux/",
    },
    {
      name: "www.github.co.za",
      url: "https://github.com/benmatela",
    },
  ];

  return (
    <section id="Links">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">Links</h2>
        <div className="mb-3">
          <PortfolioLink links={links} />
        </div>
      </div>
    </section>
  );
};
