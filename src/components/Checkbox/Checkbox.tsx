import { useState } from "react";

type Props = {
  name: string;
  price: string;
};

const CheckBox = ({ name, price }: Props) => {
  const [select, setSelect] = useState<boolean>(false);
  const selectHandle = () => {
    select ? setSelect(false) : setSelect(true);
  };
  return (
    <div className="flex justify-between mt-[20px] ">
      <div className="flex items-center ">
        {select ? (
          <div className="p-[5px] border-[1px] border-[#D5D0DF] mr-[10px] rounded-[99px]">
            <div
              className="rounded-[99px]  bg-[#4B4E68] p-[6px] "
              onClick={selectHandle}
            ></div>
          </div>
        ) : (
          <div
            className="w-[24px] h-[24px] rounded-[99px] border-[1px] border-[#D5D0DF] mr-[10px]"
            onClick={selectHandle}
          ></div>
        )}
        <p className="text-[16px] text-[#4B4E68] font-[500]">{name}</p>
      </div>
      <div>
        <p className="font-[600] text-[16px] text-[#000034]">
          {price && "$" + price}
        </p>
      </div>
    </div>
  );
};

export default CheckBox;
