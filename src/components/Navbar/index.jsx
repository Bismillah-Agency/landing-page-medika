import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import icon from "../../assets/navbar-icon.svg";
import Landing from "../../pages/Landing";
import Login from "../../pages/login";
import Button from "../Button";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const klik = () => {
    setOpenNav(!openNav);
  };

  const move = (link) => {
    return (
      <Link to={link}></Link>
    );
  }
  return (
    <>
      <div className="containre pt-16">
        <div className="flex justify-between">
          <div className="flex self-center">
            {/* <img src={logo} alt="" className="self-center"></img> */}
            {/* <h1 className="font-bold text-xl text-bold">LOGO</h1> */}
            <div className="flex">
              <img src={logo} className="mr-5 w-[160px]" alt="" />
            </div>
          </div>

          <div className="sm:flex gap-5 lg:gap-10 hidden">
            <Button isActive={true} type="link">
              Home
            </Button>
            <Button isActive={false} type="link">
              Tentang
            </Button>
            <Button isActive={false} type="link">
              Layanan
            </Button>
            <Button isActive={false} type="link">
              Fitur
            </Button>
            <Button isActive={false} type="link">
              Artikel
            </Button>
            <Button isOutline={true} type="link" onClick={move('/login')}>Masuk</Button >
          </div>
          <button className="grid justify-items-stretch sm:hidden" onClick={klik}>
            <img
              src={icon}
              alt=""
              className="justify-self-end self-center w-5"
            />
          </button>
        </div>

        <div>
          {openNav === true ? (
            <div className="grid mt-4 md:hidden">
              <Button
                className="py-3 hover:bg-blue-500 hover:text-white rounded-full"
                isActive={true}
                type="link"
              >
                Home
              </Button>
              <Button
                className="py-3 hover:bg-blue-500 hover:text-white rounded-full"
                isActive={false}
                type="link"
              >
                Tentang
              </Button>
              <Button
                className="py-3 hover:bg-blue-500 hover:text-white rounded-full"
                isActive={false}
                type="link"
              >
                Layanan
              </Button>
              <Button
                className="py-3 hover:bg-blue-500 hover:text-white rounded-full"
                isActive={false}
                type="link"
              >
                Artikel
              </Button>
              <Button
                className="py-3 hover:bg-blue-500 hover:text-white rounded-full"
                isActive={false}
                type="link"
              >
                Fitur
              </Button>
              <Button isOutline={true}>Punya Akun?</Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
