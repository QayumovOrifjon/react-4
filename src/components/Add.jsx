import { useState } from "react";

const Add = ({ addChanged }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  return (
    <div>
      <div className="mt-12">
        <h1 className="text-[#211e55] font-bold text-[32px]">PACK ADD-ONS</h1>
        <p className="text-[#c7c8cc]">
          Add-ons help enhance your gaming experience. in the  future
        </p>

        <div
          className={`flex border p-5 justify-between mt-8 rounded-lg w-full items-center ${
            isChecked1 ? "bg-[#f6f7ff]" : ""
          }`}
        >
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={handleCheckboxChange1}
          />
          <div>
            <h1 className="text-[#211e55] font-medium">Online servers</h1>
            <p className="text-[#c7c8cc]">Access to multiplayer games</p>
          </div>
          <p className="text-blue-600 font-medium">+$1/mo</p>
        </div>

        <div
          className={`flex border p-5 justify-between mt-2 rounded-lg w-full items-center ${
            isChecked2 ? "bg-[#f6f7ff]" : ""
          }`}
        >
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={handleCheckboxChange2}
          />
          <div>
            <h1 className="text-[#211e55] font-medium">Online servers</h1>
            <p className="text-[#c7c8cc]">Access to multiplayer games</p>
          </div>
          <p className="text-blue-600 font-medium">+$1/mo</p>
        </div>

        <div
          className={`flex border p-5 justify-between mt-2 rounded-lg w-full items-center ${
            isChecked3 ? "bg-[#f6f7ff]" : ""
          }`}
        >
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={handleCheckboxChange3}
          />
          <div>
            <h1 className="text-[#211e55] font-medium">Online servers</h1>
            <p className="text-[#c7c8cc]">Access to multiplayer games</p>
          </div>
          <p className="text-blue-600 font-medium">+$1/mo</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="border border-[#383e92] bg-[#383e92] px-6 py-2 text-white rounded-lg flex mt-10 justify-end"
          onClick={addChanged}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default Add;
