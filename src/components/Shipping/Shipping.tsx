import Input from "../Input";

const Shipping = () => {
  return (
    <div className="mt-[50px]">
      <p className="font-[600] text-[24px]">Shipping Address</p>
      <div className="mt-[20px]">
        <Input placeholder="Country" icon="point" topLabel="" />
      </div>
      <div className="mt-[29px] flex justify-between">
        <div className="mr-[16px]">
          <Input topLabel="First Name" placeholder="First Name" icon="man" />
        </div>
        <div>
          <Input topLabel="Last Name" placeholder="Last Name" icon="man" />
        </div>
      </div>
      <div className="mt-[20px]">
        <Input topLabel="" placeholder="Address" icon="address" />
      </div>
      <div className="mt-[20px] flex justify-between">
        <div className="mr-[16px]">
          <Input topLabel="" placeholder="City" icon="" />
        </div>
        <div>
          <Input topLabel="" placeholder="Postal Code" icon="" />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
