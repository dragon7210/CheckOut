import Checkbox from "../Checkbox";

const ShippingMethod = () => {
  return (
    <div className="mt-[50px]">
      <p className="text-[24px] font-[500]">Shipping method</p>
      <div className="mt-[20px]">
        <Checkbox name="Free shipping" price="20" />
        <Checkbox name="DHL with price" price="10" />
      </div>
    </div>
  );
};

export default ShippingMethod;
