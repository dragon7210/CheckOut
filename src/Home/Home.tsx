import Clock from "../components/Clock";
import Payment from "../components/Payment";
import Contact from "../components/Contact";
import Shipping from "../components/Shipping";

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
        <Contact />
        <Shipping />
      </div>
      <div className="bg-[#EFF0F54D]"></div>
    </div>
  );
};

export default Home;
