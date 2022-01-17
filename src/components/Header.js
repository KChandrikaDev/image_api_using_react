import React from "react";
import "../App.css";

export default function Header(props) {
  
  return (
    <div className="topnav text-center p-2 bg-primary">
      <a href="#" className="active">
        Image Gallery
      </a>
      <a>
      <button onClick={()=>props.sortImage()} className=" btn  ">
          {props.sort? "Top to Bottom":"Bottom to top"}
      </button>
      </a>
      <a>
      <button  onClick={()=> props.alignImages()} className=" btn  ">
          {props.ltrRtl?"Left to Right":"Right to Left"}
      </button>
      </a>
    </div>
  );
}
