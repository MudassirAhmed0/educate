import React from "react";
import getAppPng from "../../assets/images/getApp.png";
import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/googlePlay.png";

const GetApp = ({ bgGray, bgWhite }) => {
  return (
    <section className={`min-h-[100vh] py-[40px] overflow-hidden shadow-lg ${bgGray ? "bg-gray" : ""} ${ bgWhite ? "bg-white" : "" }`}>
      <div className="container h-[100%]">
        <div className="flex justify-between lg:flex-row flex-col flex-col-reverse items-center h-[100%]">
          <div className="lg:w-[45%] w-[100%] flex justify-start items-start flex-col lg:pl-[70px] pl-[0] pr-[10px] lg:pt-[0] pt-[7%]"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <h3 className="fib lg:text-[34px] text-[25px] capitalize pb-[8px]">
            Contact Our Team
            </h3>
            <div>
                <p className="text-[16px] mb-[35px]">We're heppy to answer your queries & Get you shared on wise</p>
                <div className="font-medium text-[18px]">
                    <a className="block">sales@Educate.live</a>
                    <a className="block">+91 7831818181</a>
                    <a className="block">@educatelive</a>
                </div>
            </div>
          </div>
          <div className="lg:w-[55%] w-[100%] flex justify-center items-center">
            <div className="teamFoem">
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
