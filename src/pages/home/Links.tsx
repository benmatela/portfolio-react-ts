import React from "react";
import { PortfolioLink } from "../../components/PortfolioLink";

export const Links = () => {
  const links = [
    {
      name: "www.dreamshare.com",
      url: "https://benmatela.github.io/dreamshare",
    },
    {
      name: "www.angular-bingo.com",
      url: "https://benmatela.github.io/angular-bingo/#/",
    },
    {
      name: "www.react-posts.com",
      url: "https://benmatela.github.io/posts-crud-react-nodejs",
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
