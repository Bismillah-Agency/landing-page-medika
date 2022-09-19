import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import icon from "../../assets/navbar-icon.svg";
import Landing from "../../pages/Landing";
import Button from "../Button";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const klik = () => {
    setOpenNav(!openNav);
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex self-center">
          {/* <img src={logo} alt="" className="self-center"></img> */}
          {/* <h1 className="font-bold text-xl text-bold">LOGO</h1> */}
          <div className="flex">
            <img src={logo} className=" lg:w-1/12 md:w-3/12 w-2/12" alt="" />
            <h1 className="font-bold text-2xl text-bold self-center">
              KEMEDIK
            </h1>
          </div>
        </div>

        <div className="sm:flex gap-8 md:gap-5 hidden">
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
            Artikel
          </Button>
          <Button isActive={false} type="link">
            Fitur
          </Button>
          <Button isOutline={true}>Punya Akun?</Button>
        </div>
        <button className="grid justify-items-stretch sm:hidden" onClick={klik}>
          <img
            src={icon}
            alt=""
            className="justify-self-end self-center w-14"
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
              Fitur
            </Button>
            <Button isOutline={true}>Punya Akun?</Button>
          </div>
        ) : null}
      </div>
    </>
  );
}
