
const Summary = () => {
    return (
      <div>
        <div className="mt-12">
          <h1 className="text-[#211e55] font-bold text-[32px] ">FINISHING UP</h1>
          <p className="text-[#c7c8cc]">
            You have the option of monthly or yearly billing image the use
          </p>
          <div className="mt-10 bg-[#f7f7ff] rounded-xl p-5">
            <div
              className="flex justify-between py-5 items-center
              "
            >
              <p className="font-bold">
                Arcade(monthly) <br />{" "}
                <span className="text-[#c7c8cc]">change</span>
              </p>
              <p className="font-bold">$9/mo</p>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <p className="text-[#c7c8cc]">online servise</p>
              <p className="font-bold">+$1/mo</p>
            </div>
            <div className="flex justify-between py-5">
              <p className="text-[#c7c8cc]">online servise</p>
              <p className="font-bold">+$1/mo</p>
            </div>
          </div>
          <div className="flex p-5 justify-between ">
            <p className="text-[#c7c8cc]">total month</p>
            <p className="font-bold">+$12/mo</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Summary