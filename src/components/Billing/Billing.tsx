import Checkbox from "../Checkbox";

const Billing = () => {
  return (
    <div className="mt-[50px] pb-[256px]">
      <p className="text-[#000034] text-[24px] font-[600]">Billing Address</p>
      <p className="text-[14px] text-[#84849A]">
        Specify the address for your payment option
      </p>
      <Checkbox name="Same as shipping address" price="" />
      <Checkbox name="Use a different billing address" price="" />
      <div className="mt-[50px]">
        <button className="flex text-white bg-[#050824] py-4 px-[70px] items-center rounded-[99px]">
          <p className="text-[18px] font-[600]">Complete Order</p>
          <img alt="direction" src="svg/direction.svg" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Billing;
