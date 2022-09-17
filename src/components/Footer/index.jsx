import React from "react";
import logo from "../../assets/logo.jpg";
import maps from "../../assets/maps.png";

const Footer = () => {
  const handleMapsImage = () => {
    window.open("https://goo.gl/maps/FtotQVgufJL1XzdV6", "_blank");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
        <div className="flex flex-col w-full lg:w-80 gap-5">
          <div className="flex flex-row">
            <img className="self-start h-20" src={logo} alt="logo" />
            <h1 className="font-bold text-xl self-center">KEMEDIK</h1>
          </div>
          <p className="text-lg text-slate-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col w-40">
            <h5 className="text-lg font-bold mb-5 text-blue-500">Links</h5>
            <div className="flex flex-col gap-4">
              <button className="text-start text-lg text-slate-400">
                Tentang
              </button>
              <button className="text-start text-lg text-slate-400">
                Layanan
              </button>
              <button className="text-start text-lg text-slate-400">
                Fitur
              </button>
            </div>
          </div>
          <div className="flex flex-col w-40">
            <h5 className="text-lg font-bold mb-5 text-blue-500">Media Sosial</h5>
            <div className="flex flex-col gap-4">
              <button className="text-start text-lg text-slate-400">
                Instagram
              </button>
              <button className="text-start text-lg text-slate-400">
                WhatsApp
              </button>
              <button className="text-start text-lg text-slate-400">
                Twitter
              </button>
              <button className="text-start text-lg text-slate-400">
                LinkedIn
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-bold mb-5 text-blue-500">
              Alamat Kami
            </h5>
            <div>
              <img
                onClick={handleMapsImage}
                className="rounded-xl h-36 cursor-pointer"
                src={maps}
                alt="agency"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="p-0 m-0" />
      <div className="flex justify-center">
        <p className="text-lg text-slate-400">
          All right reserved. Created and Designed with ❤ by{" "}
          <span className="font-semibold text-lg text-blue-500">KEMEDIK</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
