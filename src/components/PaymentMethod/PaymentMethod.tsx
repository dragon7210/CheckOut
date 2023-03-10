import Input from "../Input";

const PaymentMethod = () => {
  return (
    <div className="mt-[50px]">
      <p className="font-[600] text-[24px] text-[#000034]">Payment Method</p>
      <p className="mt-[5px] text-[14px] text-[#84849A]">
        All transaction are secured and encryted
      </p>
      <div className="mt-[39px]">
        <Input
          topLabel="Card Number"
          icon="card"
          placeholder="2587 9860 2354"
        />
      </div>
      <div className="mt-[20px]">
        <Input topLabel="" icon="man" placeholder="Name on Card" />
      </div>
      <div className="mt-[20px] flex justify-between">
        <div className="mr-[16px]">
          <Input topLabel="" icon="" placeholder="MM/YY" />
        </div>
        <Input topLabel="" icon="" placeholder="CVV" />
      </div>
      <div className="flex mt-5">
        <div>
          <input type="checkbox" className="w-[20px] mr-3"></input>
        </div>
        <div>
          <p>
            By checking this box, I acknowledge that I have read and agree to
            the <strong>Terms of Service</strong> , and {""}
            <strong>Monthly Billing Terms</strong> of this website and want to
            opt-in for the monthly billed Dream Collection Club®
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
