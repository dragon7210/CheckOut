import Clock from "../components/Clock";
import Payment from "../components/Payment";
import Contact from "../components/Contact";
import Shipping from "../components/Shipping";
import ShippingMethod from "../components/ShippingMethod";
import PaymentMethod from "../components/PaymentMethod";
import Billing from "../components/Billing";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#F5F5F5]  pr-[60px] pl-[40%]">
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
        <ShippingMethod />
        <PaymentMethod />
        <Billing />
      </div>
      <div className="bg-[#EBECF3] pl-[60px] pr-[40%]">
        <div className="mt-[66px]">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
