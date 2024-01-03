import React from "react";
import Photo from "../../assets/images/profile.jpeg";
import { Navbar } from "../../components/layout/Navbar";
import { Skills } from "./Skills";
import { Links } from "./Links";
import { IMenuListItem } from "../../models/menu-list-item.model";
import { Button } from "../../components/Button";
import { Footer } from "../../components/layout/Footer";

export const Home = () => {
  const menuItems: IMenuListItem[] = [
    { id: 0, name: "Home", selected: false, icon: {}, linkTo: "/" },
    { id: 1, name: "Menu 2", selected: false, icon: {}, linkTo: "/" },
    { id: 2, name: "Menu 3", selected: false, icon: {}, linkTo: "/" },
  ];

  return (
    <div>
      <Navbar menuItems={menuItems} />
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Lepekola Benedict Matela
          </h1>
          <p className="max-w-sm text-center text-gray-500 md:text-left">
            I'm a self-taught full stack developer with 5 years of experience
            building responsive apps using Angular/HTML/React with CSS
            frameworks such as Bootstrap and TailwindCSS. <br></br>
            <br></br>I'm also skilled in NodeJs and Firebase for backend and
            deployments.
            <br></br>
            <br></br>I enjoy learning new technology and using it to create
            innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              label="Hire"
              className="p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-orange-700 cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-0 m-0">
          <img className="md:h-[500px] mb-2" src={Photo} alt="" />
        </div>
      </div>
      <Skills />
      <Links />
      <Footer />
    </div>
  );
};
