type Props = {
  placeholder: string;
  icon: string;
  topLabel: string;
};

const Input = ({ topLabel, placeholder, icon }: Props) => {
  return (
    <div className="px-[69px] py-[16px] rounded-[99px] border-[#D6D8EE] border-[1.5px] relative">
      <span className="absolute top-[-13px] left-[35px] text-[15px] bg-[#F5F5F5] px-3">
        {topLabel}
      </span>
      {icon.length !== 0 && (
        <img
          className="absolute left-[40px]"
          alt="icon"
          src={"svg/" + icon + ".svg"}
        />
      )}

      <input
        className="text-[16px] outline-none bg-[#F5F5F5]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
