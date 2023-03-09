import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div className="h-[80px] bg-[#050824] px-[405px]  flex items-center ">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <p className="ml-3 text-white text-[18px]">Rebilion.io</p>
      </div>
    </div>
  );
};

export default Header;
