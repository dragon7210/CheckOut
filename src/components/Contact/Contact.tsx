import Input from "../Input";

const Contact = () => {
  return (
    <div className="mt-[50px]">
      <p className="font-[600] text-[24px]">Contact Information</p>
      <div className="mt-[29px]">
        <Input
          topLabel="Email Address"
          icon="message"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
};

export default Contact;
