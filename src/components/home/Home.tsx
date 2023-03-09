import Clock from "../clock";
import Payment from "../payment";

const Home = () => {
  return (
    <div className="flex">
      <div className="bg-[#F5F5F5] pl-[405px] pr-[60px]">
        <p className="mt-[60px] font-[700] text-[36px]">
          <strong>Checkout</strong>
        </p>
        <div className="flex mt-[10px]">
          <p className="text-[14px] font-[500] mr-[24px]">Cart</p>
          <p className="text-[14px] font-[500]">Shipping & Billing</p>
        </div>
        <Clock />
        <Payment />
      </div>
      <div className="bg-[#EFF0F54D]"></div>
    </div>
  );
};

export default Home;
