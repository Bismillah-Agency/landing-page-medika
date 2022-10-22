import React, { useState } from "react";
import Navbar from "../../Navbar";
import Logo from "../../../assets/Logo.png"
import Footer from "../../Footer";

export default function Tentang() {
    return (
        <>
            <div className="relative px-10 md:px-16 lg:px-20 xl:px-28 mb-5 scroll-smooth">
                <div className="absolute -z-10 top-0 right-0">
                    <svg
                        width="900"
                        height="900"
                        viewBox="0 200 400 1060"
                        fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>
                <Navbar />
                <div>
                    <h1 className="font-bold text-4xl mt-20 text-blue-400 mb-5">TENTANG</h1>
                </div>
                <div className="flex flex-row mt-10 mb-40">
                    <div className="w-1/3 p-10">
                        <img src={Logo} alt="" className="object-cover" />
                    </div>
                    <div className="w-2/3 self-center flex flex-col">
                        <div className="container">
                            <h1 className="font-bold text-3xl mb-5">Kelola Medika</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis convallis elit, molestie auctor urna. Aliquam id ligula ac odio imperdiet placerat sed nec erat. Etiam non justo blandit arcu bibendum mattis. Donec viverra faucibus pretium. Morbi mauris risus, tincidunt sodales ante non, suscipit ultricies purus. Sed lobortis vel lorem eget dignissim. Aenean sagittis sollicitudin mattis. Aliquam ornare auctor dui, ut placerat libero placerat gravida. Curabitur augue leo, ultricies non leo ultricies, cursus tincidunt est. Vivamus blandit egestas magna, tincidunt vulputate elit interdum in. Ut vitae arcu sit amet purus auctor tincidunt et vulputate turpis. Aliquam eu dolor nec neque posuere hendrerit in eget massa. Fusce finibus, sem a dictum elementum, sapien erat scelerisque tellus, quis vestibulum nibh sapien suscipit tellus. Maecenas vulputate nibh eget iaculis luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                        <div className="flex flex-row mt-10">
                            <div>

                            </div>
                            <div className="container">
                                <h3 className="font-bold md:text-2xl text-xl text-center bg-blue-400 rounded-xl mb-5 text-white py-3">VISI & MISI</h3>
                                <div className="flex flex-row gap-8 ml-5 mb-2">
                                    <div className="container w-1/4 self-center text-center">
                                        <span className="font-bold text-lg">Visi</span>
                                    </div>
                                    <p>Mendeskripsikan tujuan perusahaan di masa mendatang. Berbeda dengan misi, visi biasanya menggambarkan apa yang ingin diraih perusahaan.</p>
                                </div>
                                <div className="flex flex-row gap-8 ml-5">
                                    <div className="container w-1/4 self-center text-center">
                                        <span className="font-bold text-lg">Misi</span>
                                    </div>
                                    <p>Mendeskripsikan tujuan perusahaan di masa mendatang. Berbeda dengan misi, visi biasanya menggambarkan apa yang ingin diraih perusahaan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}