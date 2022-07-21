import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
        <nav className="w-[100%] h-[80px] bg-[#fbfbfb] shadow-sm">
          <div className="container">
            <div className="flex justify-between items-center">
              <a>
                <img src={logo} className="max-h-70px]" />
              </a>
              <ul className="lg:flex justify-end items-center gap-x-[30px] hidden">
                <li className="fim text-[20px] text-capitalize text-[#000]">
                  <Link to="/">Home</Link>
                </li>
                <li className="fim text-[20px] text-capitalize text-[#000]">
                  <Link to="/features">Features</Link>
                </li>
                <li className="fim text-[20px] text-capitalize text-[#000]">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="fim text-[20px] text-capitalize text-[#000] group relative">
                  <Link to="/">Resources</Link>
                  {/* <ul className="hidden group-hover:block absolute top-[40px] bg-[#fff] shadow min-w-[150px] py-[10px] px-[15px] m-0">
                  <li className="text-[14px] capitalize py-[3px]">menu 1</li>
                  <li className="text-[14px] capitalize py-[3px]">menu 2</li>
                  <li className="text-[14px] capitalize py-[3px]">menu 3</li>
                  <li className="text-[14px] capitalize py-[3px]">menu 4</li>
                </ul> */}
                </li>

                <li className="fim text-[20px] text-capitalize text-blue">
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Button variant="contained">
                    <span className="fim capitalize">Start your free trial</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navigation;
