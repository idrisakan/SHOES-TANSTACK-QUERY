import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-fa_white flex justify-between max-w-[1320px] p-[32px] rounded-[12px] md:rounded-[24px] items-center">
      <div className="text-dark font-semibold flex gap-[40px] max-md:hidden items-center">
        <Link to="/">New Drops 🔥</Link>
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
      </div>
      <button className="md:hidden">
        <img className="w-7" src="/bar.svg"  />
      </button>
      <Link to={"/"}>
        <img src="/Logo.svg" />
      </Link>

      <div className="flex items-center gap-[9px] md:gap-[40px]">
        <button className="max-md:hidden">
          <img src="/Search.svg" alt="" />
        </button>
        <button>
          <img src="/User.svg" alt="" />
        </button>
        <button className="w-[25px] h-[25px] bg-yellow rounded-full font-semibold grid place-items-center">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
