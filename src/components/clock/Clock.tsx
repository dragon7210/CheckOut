const Clock = () => {
  return (
    <div className="mt-[60px] bg-[#979AB8] p-[30px] rounded-[32px] ">
      <p className="text-[18px] font-[700]">
        🔥 Your cart is reserved for <strong>10:00</strong> minutes
      </p>
      <div className="flex mt-[15px]">
        <div className="w-[46px] bg-white rounded-[12px] text-center mr-[21px]">
          <p className="font-[500] text-[18px] py-[5px]">00</p>
        </div>
        <div className="w-[46px] bg-white rounded-[12px] text-center mr-[21px]">
          <p className="font-[500] text-[18px] py-[5px]">00</p>
        </div>
        <div className="w-[46px] bg-white rounded-[12px] text-center">
          <p className="font-[500] text-[18px] py-[5px]">00</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
