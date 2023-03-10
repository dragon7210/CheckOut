const Product = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img alt="shoe" src="img/shoe1.png" />
        <p className="ml-[20px] text-[16px] min-w-[110px] ">Nike sneakers</p>
      </div>
      <div>
        <p className="text-[16px]">$120.90</p>
      </div>
    </div>
  );
};

export default Product;
