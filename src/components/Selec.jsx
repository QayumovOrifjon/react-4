import { useState } from "react";
import Arc from "../../src/assets/icon-arcade.svg";

const Select = ({ selectChanged }) => {
  const [count1, setCount] = useState(true);
  const handleClick = () => {
    setCount(!count1);
  };

  return (
    <div>
      <div className="pt-12">
        <h1 className="text-[#211e55] font-bold text-[32px] ">
          SELECT YOUR PLAN
        </h1>
        <p className="text-[#c7c8cc]">
          You have the option of monthly or yearly billing the image
        </p>
        <div className="flex mt-10 gap-3" id="">
          <div className="border py-4 cursor-pointer pl-5 pr-8 rounded-md w-[150px] h-[210px]">
            <img src={Arc} alt="img" />
            <h1 className="text-[#211e55] text-[20px] font-bold mt-10">
              Arcade
            </h1>
            <p className="text-[#c7c8cc]">$90/yg</p>
            {count1 ? (
              <>
                <p className="text-[#211e55] font-medium">2 months free</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="border py-4 cursor-pointer pl-5 pr-8 rounded-md w-[150px] h-[210px]">
            <img src={Arc} alt="img" />
            <h1 className="text-[#211e55] text-[20px] font-bold mt-10">
              Advadced
            </h1>
            <p className="text-[#c7c8cc]">$90/yg</p>
            {count1 ? (
              <>
                <p className="text-[#211e55] font-medium">2 months free</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="border py-4 cursor-pointer pl-5 pr-8 rounded-md w-[150px] h-[210px] ">
            <img src={Arc} alt="img" />
            <h1 className="text-[#211e55] text-[20px] font-bold mt-10">pro</h1>
            <p className="text-[#c7c8cc]">$90/yg</p>
            {count1 ? (
              <>
                <p className="text-[#211e55] font-medium">2 months free</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="bg-[#f6f7ff] mt-10 rounded-lg ">
          {count1 ? (
            <>
              <div className="flex justify-center gap-5 py-4  ">
                <h1
                  className="text-[#24215f] font-medium"
                  onClick={handleClick}
                >
                  Monthly
                </h1>
                <button>
                  <div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </button>
                <h1 className="text-[#c1c0cc] font-medium">Yearly</h1>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center gap-5 py-4 ">
                <h1
                  className="text-[#c1c0cc] font-medium"
                  onClick={handleClick}
                >
                  Monthly
                </h1>
                <div>
                  <form className="">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </form>
                </div>

                <h1
                  className="text-[#24215f] font-medium"
                  onClick={handleClick}
                >
                  Yearly
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        
        <button
          className="border border-[#383e92] bg-[#383e92] px-6 py-2 text-white rounded-lg flex mt-5 justify-end"
          onClick={selectChanged}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default Select;
