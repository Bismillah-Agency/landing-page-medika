import React from "react";
import "./index.css";

const TestimonialCard = (props) => {
  // const propsExample = {
  //     imgLink: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //     rating: 4,
  //     review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  //     userName: 'Gisani Miftahul Rahma',
  //     userDetail: 'Owner of My Heart'
  // }
  let review = props.userReview;
  review = review.substr(0, 180);
  let review2 = props.userReview;
  review2 = review.substr(0, 100);
  return (
    <div className="h-full scroll m-5">
      <div className="flex flex-col hidden sm:block">
        <div className=" ml-5 mt-5">
          <p className="md:text-2xl text-lg font-semibold text-slate-700">
            {props.userName}
          </p>
          <p className="text-slate-400 text-lg md:text-md">
            {props.userDetail}
          </p>
        </div>
        <div className="flex flex-row items-center rounded-2xl drop-shadow-xl mb-10">
          <div className="rounded-2xl w-full h-40 bg-white overflow-hidden m-5">
            <img
              className="rounded-2xl object-cover"
              src={props.userImg}
              alt={props.userName}
            />
          </div>
          <div className="flex flex-col gap-2 sm:justify-center sm:w-[450px] md:m-5 pr-5">
            <div className="container">
              <p className="md:text-md text-sm text-slate-400">{review}</p>
            </div>
            {/* <div className="sm:hidden">
            <p className="md:text-xl text-md font-semibold text-slate-700 mb-2">
              {props.userName}
            </p>
          </div> */}
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full h-full pb-10">
        <div className="flex flex-row items-center drop-shadow-xl bg-white rounded-2xl">
          <div className="rounded-2xl h-40 w-60 overflow-hidden m-5">
            <img
              className="h-full object-cover w-full"
              src={props.userImg}
              alt="img"
            />
          </div>
          <div className="w-full pr-5">
            <p className="md:text-xl text-xl font-bold text-slate-700 mb-2">
              {props.userName}
            </p>
            {/* <p className="text-slate-600 text-md mb-5">{props.userDetail}</p> */}
            <p className="md:text-md text-sm text-slate-400">{review2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
