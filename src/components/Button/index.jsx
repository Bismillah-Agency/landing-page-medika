import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Index(props) {
  const className = [props.className];
  if (props.isPrimary)
    className.push(
      "bg-blue-500 hover:bg-blue-600 py-4 px-9 text-white rounded-full font-semibold w-fit hover:scale-110 transition-all"
    );
  if (props.isOutline)
    className.push(
      "py-4 px-9 text-blue-500 hover:text-white hover:bg-blue-500 outline-indigo-500 outline outline-1 rounded-full font-semibold hover:scale-110 transition-all"
    );
  if (props.isLarge)
    className.push(
      "bg-blue-500 py-4 justify-center text-white rounded-full font-semibold w-full hover:bg-blue-700 transition-all"
    );
  if (props.isActive) className.push("text-blue-500");

  const onClick = () => {
    if (props.onClick)
      <Link to={props.onClick()}></Link>;
  };
  console.log(props.sectionId);
  if (props.type === "link") {
    <Link to={props.sectionId} className={className.join(" ")}>
      {props.children}
    </Link>;
  }
  return (
    <button
      className={className.join(" ")}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Index.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  className: propTypes.string,
  isOutline: propTypes.bool,
  isPrimary: propTypes.bool,
  isLarge: propTypes.bool,
  isActive: propTypes.bool,
};
