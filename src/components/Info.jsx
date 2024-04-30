import { useState } from "react";

const Personal = ({ perChanged }) => {
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [inputValueThree, setInputValueThree] = useState("");

  const inputChanges1 = (e) => {
    setInputValueOne(e.target.value);
  };

  const inputChanges2 = (e) => {
    setInputValueTwo(e.target.value);
  };

  const inputChanges3 = (e) => {
    setInputValueThree(e.target.value);
  };

  console.log(inputValueOne, inputValueTwo, inputValueThree);

  return (
    <div className="box-border pt-12 ">
      <h1 className="text-[#211e55] font-bold text-[32px]">PERSONAL INFO</h1>
      <p className="text-[#c7c8cc]">
        Please provide your name, email, and phone number. the emage
      </p>
      <form className="mt-6">
        <label>Name</label> <br />
        <input
          required
          type="text"
          value={inputValueOne}
          onChange={inputChanges1}
          placeholder="e.g. John Doe"
          className="border w-full p-2 mt-1 rounded-lg"
        />{" "}
        <br /> <br />
        <label>Email Address</label> <br />
        <input
          type="text"
          value={inputValueTwo}
          onChange={inputChanges2}
          placeholder="e.g. john@example.com"
          className="border w-full p-2 mt-1 rounded-lg"
        />{" "}
        <br /> <br />
        <label>Phone Number</label> <br />
        <input
          type="number"
          value={inputValueThree}
          onChange={inputChanges3}
          placeholder="e.g. +1234567890"
          className="border w-full p-2 mt-1 rounded-lg"
        />
      </form>
      <div className="flex justify-end">
        {inputValueOne && inputValueTwo && inputValueThree ? (
          <>
            <button
              className="border border-[#383e92] bg-[#383e92] px-6 py-2 text-white rounded-lg flex mt-20 justify-end"
              onClick={perChanged}
            >
              Next step
            </button>
          </>
        ) : (
          <>
          
            <button className="border border-[#383e92] bg-[#383e92] px-6 py-2 text-white rounded-lg flex mt-20 justify-end">
              Next step
            </button>

          </>
        )}
      </div>
    </div>
  );
};

export default Personal;
