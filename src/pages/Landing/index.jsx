import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ServiceItem from "../../components/Landing/ServiceItem";
import Footer from "../../components/Footer";
import arrowRight from "../../assets/ic_arrow_right_circle.svg";
import heroimage from "../../assets/doctor.png";
import logo from "../../assets/logo.jpg";
import assetpesan from "../../assets/pesan.png";

import {
  // personalWebIcon,
  // olshopIcon,
  // compIcon,
  // moreIcon,
  circle,
  dot,
  instagramIcon,
  emailIcon,
  phoneIcon,
  locationIcon,
  design,
  sistem,
  lainlain,
  modul,
} from "../../assets";
import TestimonialCard from "../../components/Landing/TestimonialCard";

const Landing = () => {
  const cardData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YZU6viJSqxbL9hGCn5LuDEUJXWwyTYtjbQ&usqp=CAU",
      title: "Klinik Kecantikan Menjadi Hal Wajib Bagi Wanita",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img: "https://images.bisnis-cdn.com/posts/2019/07/23/1127622/rsud070119-2.jpg",
      title: "Kendala Administrasi yang Kurang Efisien",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    // {
    //     img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    //     title: "Status Kegiatan Klinik",
    //     desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    // },
    {
      img: "https://i.ytimg.com/vi/gJMug-xmCbg/maxresdefault.jpg",
      title: "Masalah Klinik Bodong",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    // {
    //     img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    //     title: "Shayna Online Shop",
    //     desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    // },
    // {
    //     img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    //     title: "Shayna Online Shop",
    //     desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    // },
  ];

  const serviceData = [
    {
      title: "Tampilan Sederhana",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: design,
    },
    {
      title: "Sistem Mudah",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: sistem,
    },
    {
      title: "Sesuai Modul KemenKes",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: modul,
    },
    {
      title: "Dan Lebih Lagi",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: lainlain,
    },
  ];

  const testimonialData = [
    {
      imgLink:
        "https://rsud.ntbprov.go.id/wp-content/uploads/2020/06/mainhall1-1024x683.jpg",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Pendaftaran",
      userDetail: "Pendaftaran Pasien",
    },
    {
      imgLink:
        "https://mediacdn.quipper.com/media/W1siZiIsIjIwMTkvMDgvMjkvMDcvNDcvNTkvZjIyMzdiMjAtNWRiNy00MWVlLTlmYTEtZDhiMjhlMGU3ZWYwLyJdLFsicCIsInRodW1iIiwiNjQweDY0MCNjIix7fV0sWyJwIiwiY29udmVydCIsIi1jb2xvcnNwYWNlIHNSR0IgLXN0cmlwIix7ImZvcm1hdCI6ImpwZyJ9XV0.jpg?sha=ac239fcdded9cec4",
      rating: 3,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Administrasi",
      userDetail: "Pendaftaran Pasien",
    },
    {
      imgLink:
        "data:image/png;base64,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",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "BPJS",
      userDetail: "Bernaung dengan BPJS",
    },
    {
      imgLink:
        "https://www.editel.at/wp_contents/uploads/2019/08/business_monitoring.jpg",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Monitoring Data",
      userDetail: "Monitoring data mudah dan jelas",
    },
    {
      imgLink:
        "https://imedis.co.id/img/imedis/modul_imedis/pelayanan_imedis/imedis-software-rumah-sakit-klinik_reservasi.png",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Reservasi",
      userDetail: "Reservasi memudahkan klinik dan data selalu tervalidasi",
    },
  ];

  const handleOpenGoogleMaps = () => {
    window.open("https://goo.gl/maps/FtotQVgufJL1XzdV6", "_blank");
  };

  return (
    <>
      {/* <img className="absolute -z-40 h-full w-full" src={ellipse.svg} alt="" /> */}

      <div className="relative px-10 md:px-16 lg:px-20 xl:px-28 pt-14 pb-6 scroll-smooth ">
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
        {/* <div className="absolute -z-10 left-0 top-[100rem] lg:top-[55rem]  sm:top-[80rem]  ">
                    <svg
                        width="700"
                        height="700"
                        viewBox="300 0 1060 1060"
                        fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div> */}
        {/* <div className="absolute -z-10 right-0 top-[320rem] md:top-[180rem] lg:top-[140rem]">
                    <svg
                        width="700"
                        height="700"
                        viewBox="0 0 500 1060"
                        fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>
                <div className="absolute -z-10 left-0 bottom-0">
                    <svg
                        width="650"
                        height="650"
                        viewBox="200 0 1060 300"
                        fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div> */}

        <Navbar />

        <section className="mt-20 gap-x-12 flex justify-content-between flex-col md:flex-row items-center sm:gap-y-1 lg:gap-y-0">
          <div className="flex flex-col gap-12 w-full md:w-1/2 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl font-bold leading-normal">
                Memberikan <span className="text-blue-500">Solusi Terbaik</span>{" "}
                Untuk Klink Anda
              </h1>
              <p className="text-base text-slate-400 w-3/4">
                Layanan Sistem Informasi manajemen Klinik terintegrasi dalam
                mengelola dan mengembangkan bisnis Klinik Anda agar lebih
                efektif dan efisien. Sehingga berdampak pada pelayanan dan
                keuntungan yang lebih optimal.
              </p>
            </div>
            <Button isPrimary={true} isLarge={false}>
              Bergabung
            </Button>
          </div>
          <div className="mx-auto">
            <div className="overflow-hidden lg:h-full lg:w-[31rem]">
              <img
                className="object-cover w-full h-full"
                src={heroimage}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="mt-40 justify-items-center">
          <div className="flex lg:flex-row justify-between flex-col">
            <div className="rounded-2xl sm:justify-self-center pb-10 md:p-10">
              <img src={assetpesan} alt="" className="" />
            </div>
            <div className="self-center md:w-1/2 w-full">
              <div className="text-left rounded-3xl drop-shadow-lg bg-white p-10">
                <h1 className="font-bold  md:text-4xl text-3xl text-black-500 pb-5">
                  KEMEDIK
                </h1>
                <h1 className="font-reguler lg:text-lg md:text-lg sm:text-sm text-black-500">
                  Solusi management klinik anda sesuai dengan standarisasi
                  Kementrian Kesehatan
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 mt-20" id="tentang">
          <h5 className="text-xl font-semibold text-blue-500">TENTANG</h5>
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <div className="w-3/12 md:w-2/6">
              <img src={logo} alt="" className="" />
            </div>
            <div className="flex flex-col self-center">
              <h3 className="text-4xl font-bold pb-5">Kelola Medika</h3>
              <div className="flex flex-col gap-4">
                <p className="text-lg text-slate-400 text-justify">
                  Kelola akan memberikan layanan management klink agak klinik
                  anda lebih baik dalam management dan alur kerjanya. Teknologi
                  dan Fitur lengkap yang telah disesuaikan dengan standar dari
                  Kementerian Kesehatan. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fusce volutpat, sapien eget pretium dictum,
                  diam urna mattis nunc, eu volutpat mauris nulla nec lectus.
                  Donec a urna quam. Curabitur dictum suscipit neque ac
                  vehicula. Cras lectus felis, sodales nec orci eu, mattis
                  porttitor tortor.
                </p>
                <div className="flex items-stretch">
                  <button className="self-center text-base mr-2 font-semibold text-orange-400">
                    Baca Lebih..
                  </button>
                  <img src={arrowRight} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-14 mt-20" id="layanan">
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold text-blue-500">
                LAYANAN KAMI
              </h5>
              <h2 className="text-4xl font-bold">Layanan KEMEDIK</h2>
            </div>
            <div className="lg:self-center">
              <Button isOutline={true}>Lihat Lebih..</Button>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden scroll">
            {testimonialData.map((item, itemIdx) => (
              <TestimonialCard
                key={itemIdx}
                userImg={item.imgLink}
                userName={item.userName}
                userDetail={item.userDetail}
                userRating={item.rating}
                userReview={item.review}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-14 mt-20" id="artikel">
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold text-blue-500">ARTIKEL</h5>
              <h2 className="text-4xl font-bold">Artikel Kelola Medika</h2>
            </div>
            <div className="lg:self-center">
              <Button isOutline={true}>Lihat Lebih..</Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mx-auto">
            {cardData.map((item, itemIdx) => (
              <Card
                key={itemIdx}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-14 mt-20" id="fitur">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-center text-blue-500">
              FITUR
            </h5>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-center">
                Fitur Kelola Medika
              </h2>
              <p className="text-lg text-slate-400 text-center">
                Fitur yang kami suguhkan untuk anda
              </p>
            </div>
          </div>
          <div className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">
            {serviceData.map((item, itemIdx) => (
              <ServiceItem
                key={itemIdx}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </div>
        </section>
        {/* <section className="flex flex-col gap-14 mt-40">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h5 className="text-xl font-semibold text-blue-500">
              WHAT THEY SAY
            </h5>
            <h2 className="text-4xl font-bold">
              Their experience after using our services
            </h2>
          </div>
          <div className="flex flex-col gap-10 sm:gap-12 md:gap-8 md:flex-row testi_box flex-nowrap overflow-x-auto overflow-y-hidden">
            {testimonialData.map((item, itemIdx) => (
              <testimonialData
                key={itemIdx}
                userImg={item.imgLink}
                userRating={item.rating}
                userReview={item.review}
                userName={item.userName}
                userDetail={item.userDetail}
              />
            ))}
          </div>
        </section> */}
        <section className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between mt-40">
          <div className="flex flex-col self-center gap-16 w-full lg:w-2/5">
            <div>
              <h5 className="text-xl font-semibold text-blue-500 mb-4">
                KONTAK KAMI
              </h5>
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">
                  Ayo bergabung dengan kami!
                </h2>
                <p className="text-lg text-slate-400">
                  Kami akan memberikan fasilitas yang memadai dan sesuai dengan
                  aturan dan standarisasi KemenKes.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-8 lg:justify-between">
              <div className="flex flex-col gap-9">
                <div className="flex items-stretch gap-4">
                  <img src={phoneIcon} alt="arrow" />
                  <p className="self-center text-xl mr-2 font-semibold">
                    +6285740564139
                  </p>
                </div>
                <div className="flex items-stretch gap-4">
                  <img src={emailIcon} alt="arrow" />
                  <p className="self-center text-xl mr-2 font-semibold">
                    kelolamedika@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-9">
                <div className="flex items-stretch gap-4">
                  <img src={instagramIcon} alt="arrow" />
                  <p className="self-center text-xl mr-2 font-semibold">
                    @kelolamedika
                  </p>
                </div>
                <div
                  className="flex items-stretch gap-4 cursor-pointer"
                  onClick={handleOpenGoogleMaps}
                >
                  <img src={locationIcon} alt="arrow" />
                  <p className="self-center text-xl mr-2 font-semibold">
                    Open Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2 sm:w-full lg:p-14">
            <img className="absolute top-0 right-0" src={circle} alt="circle" />
            <img className="absolute bottom-0 left-0" src={dot} alt="dot" />
            <div className="relative flex flex-col gap-8 p-8 rounded-2xl bg-white shadow-lg z-40">
              <h3 className="text-2xl font-bold z-50">
                Ayo kirimkan <span className="text-blue-500">pesan</span>
              </h3>
              <form className="z-50">
                <div className="flex flex-col mb-8 gap-3">
                  <label for="email" className="text-base font-semibold">
                    Email
                  </label>
                  <input
                    className="rounded-xl text-base text-slate-500 p-3 bg-slate-100"
                    type="email"
                    id="email"
                    placeholder="Masukkan email anda"
                  />
                </div>
                <div className="flex flex-col mb-8 gap-3">
                  <label for="email" className="text-base font-semibold">
                    Pesan
                  </label>
                  <input
                    className="rounded-xl text-base text-slate-500 p-3 bg-slate-100"
                    type="email"
                    id="email"
                    placeholder="Masukkan pesan anda"
                  />
                </div>
                <Button className="flex" isLarge={true}>
                  <svg
                    className="self-center mr-4 fill-white rotate-90"
                    width="16"
                    height="16"
                    viewBox="0 0 51 51"
                  >
                    <path d="M1.85432 2.17091C1.30197 2.72963 0.906906 3.42427 0.709062 4.18461C0.511218 4.94495 0.517606 5.74404 0.727579 6.50112L12.3485 47.6603C12.5919 48.5253 13.0933 49.2955 13.7858 49.8682C14.4782 50.4409 15.3288 50.7889 16.2241 50.8657C17.1194 50.9425 18.0169 50.7445 18.7968 50.2981C19.5767 49.8517 20.2019 49.1781 20.5891 48.3673L29.4042 29.7208L48.0507 20.9057C48.8076 20.5541 49.4474 19.9923 49.894 19.2872C50.3405 18.5822 50.5749 17.7636 50.5693 16.929V16.5534C50.4981 15.6551 50.1527 14.8004 49.5797 14.1049C49.0067 13.4094 48.2339 12.9068 47.3658 12.6651L6.18454 1.04417C5.42746 0.834194 4.62836 0.827806 3.86802 1.02565C3.10768 1.22349 2.41304 1.61856 1.85432 2.17091V2.17091ZM43.6321 17.1278L27.9682 24.5511L19.3077 15.8685C18.8097 15.3705 18.1342 15.0907 17.4298 15.0907C16.7255 15.0907 16.05 15.3705 15.5519 15.8685C15.0539 16.3666 14.7741 17.0421 14.7741 17.7464C14.7741 18.4508 15.0539 19.1263 15.5519 19.6243L24.2345 28.2848L16.8112 43.9487L6.27291 6.58949L43.6321 17.1278Z" />
                  </svg>
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </section>
        <footer className="mt-40">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Landing;
