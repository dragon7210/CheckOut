import Paypal from "../../assets/img/paypal.png";
import Shop from "../../assets/img/shop.png";
import EPay from "../../assets/img/epay.png";

const Payment = () => {
  return (
    <div className="mt-[30px] border-[1px] border-[#D6D8EE] rounded-[32px] p-[30px] bg-[#FFFFFF]">
      <p className="text-[20px] text-[#000034] font-[600] ">Express Checkout</p>
      <div className="flex mt-[20px] justify-between">
        <div className="bg-[#5A31F499] py-[15px] px-[31px] rounded-[16px] w-[147px] flex justify-center border-[1px] border-[#5A31F4] ">
          <img alt="shop" src={Shop} />
        </div>
        <div className="bg-[] py-[15px] px-[31px] rounded-[16px] w-[147px] flex justify-center border-[1px] border-[#113984] ">
          <img alt="shop" src={Paypal} />
        </div>
        <div className="bg-[#EA403299] py-[15px] px-[31px] rounded-[16px] w-[147px] flex justify-center border-[1px] border-[#EA4032] ">
          <img alt="shop" src={EPay} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
