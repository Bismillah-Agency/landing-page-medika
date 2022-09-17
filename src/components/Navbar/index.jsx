import React from "react";
import logo from "../../assets/logo.jpg";
import icon from "../../assets/navbar-icon.svg";
import Button from "../Button";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex self-center">
          {/* <img src={logo} alt="" className="self-center"></img> */}
          {/* <h1 className="font-bold text-xl text-bold">LOGO</h1> */}
          <div className="flex">
            <img src={logo} className="w-1/12" alt="" />
            <h1 className="font-bold text-2xl text-bold self-center">KEMEDIK</h1>
          </div>
        </div>

        <div className="sm:flex gap-8 hidden">
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
          <Button isOutline={true}>Punya Akun?</Button>
        </div>
        <button className="sm:hidden">
          <img src={icon} alt="" />
        </button>
      </div>

      <div className="sm:hidden grid mt-4 ">
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
        <Button isOutline={true}>Sudah Bergabung?</Button>
      </div>
    </>
  );
}
