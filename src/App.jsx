import { useState } from "react";
import Info from "./components/Info";
import Add from "./components/Add";
import Summary from "./components/Summery";
import Select from "./components/Selec";

const App = () => {
  const [info, setInfo] = useState("1");

  const infoChanged = () => {
    setInfo("1");
  };
  const perChanged = () => {
    setInfo("2");
  };
  const selectChanged = () => {
    setInfo("3");
  };
  const addChanged = () => {
    setInfo("4");
  };
  const conformChanged = () => {
    setInfo("5");
  };

  return (
  <div className="bg-[#D2DAE9] p-[157px]"> 
     <div className="w-[900px] h-[800] bg-white mx-auto pt-4 pb-4 pl-4 pr-8 mt-20 rounded-[10px] flex gap-16">
  <div className="bg-[url('../../src/assets/bg-sidebar-desktop.svg')] bg-no-repeat h-full pl-7 pt-7 pb-60 pr-24 bg-center rounded-[30px] ">
    {info !== "1" ? (
      <>
        <div
          className="flex gap-6 mb-6 cursor-pointer"
          onClick={infoChanged}
        >
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px]  text-white">
            1
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 1</p>
            <p className="font-bold text-white">YOUR INFO</p>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex gap-6 mb-6 cursor-pointer">
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px] text-black bg-white">
            1
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 1</p>
            <p className="font-bold text-white">YOUR INFO</p>
          </div>
        </div>
      </>
    )}
    {info !== "2" ? (
      <>
        <div
          className="flex gap-6 mb-6 cursor-pointer"
          onClick={perChanged}
        >
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px]  text-white">
            2
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 2</p>
            <p className="font-bold text-white">SELECT PLAN</p>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex gap-6 mb-6 cursor-pointer">
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px] text-black bg-white">
            2
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 2</p>
            <p className="font-bold text-white">SELECT PLAN</p>
          </div>
        </div>
      </>
    )}
    {info !== "3" ? (
      <>
        <div
          className="flex gap-6 mb-6 cursor-pointer"
          onClick={selectChanged}
        >
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px]  text-white">
            3
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 3</p>
            <p className="font-bold text-white">ADD-ONS</p>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex gap-6 mb-6 cursor-pointer">
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px] text-black bg-white">
            3
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 3</p>
            <p className="font-bold text-white">ADD-ONS </p>
          </div>
        </div>
      </>
    )}
    {info !== "4" ? (
      <>
        <div
          className="flex gap-6 mb-6 cursor-pointer"
          onClick={addChanged}
        >
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px]  text-white">
            4
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 4</p>
            <p className="font-bold text-white">SUMMARY</p>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex gap-6 mb-6 cursor-pointer">
          <h1 className="border border-white px-[18px] py-[6px] rounded-[100%] text-[20px] text-black bg-white">
            4
          </h1>
          <div>
            <p className="text-white opacity-60">STEP 4</p>
            <p className="font-bold text-white">SUMMARY</p>
          </div>
        </div>
      </>
    )}
  </div>
  <div>
    {info === "1" ? (
      <>
        <div className="info">
          <Info perChanged={perChanged} />
        </div>
      </>
    ) : (
      <></>
    )}
    {info === "2" ? (
      <>
        <div className="relative ">
          <Select selectChanged={selectChanged}/>
          <button
            className="mt-8 text-[#9e9ba9] absolute top-[470px]"
            onClick={infoChanged}
          >
            Go Back
          </button>
        </div>
      </>
    ) : (
      <></>
    )}
    {info === "3" ? (
      <>
        <div className="relative ">
          <Add addChanged={addChanged} />
          <button
            className="mt-8 text-[#9e9ba9] absolute top-[400px]"
            onClick={perChanged}
          >
            Go back
          </button>
        </div>
      </>
    ) : (
      <></>
    )}
    {info === "4" ? (
      <>
        <div className="relative ">
          <Summary/>
          <div className="mt-5 flex justify-between ">
            <button className=" text-[#9e9ba9] " onClick={selectChanged}>
              Go back
            </button>
            <button
              className="border border-[#383e92] bg-[#383e92] px-6 py-2 text-white rounded-lg flex  justify-end"
              onClick={conformChanged}
            >
              Confirm
            </button>
          </div>
        </div>
      </>
    ) : (
      <></>
    )}
  </div>
 
</div></div>
  );
};

export default App;
