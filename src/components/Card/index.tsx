import { Shoe } from "../../types";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import calcDiscount from "../../utils/calcDiscount";

type Props = {
  item: Shoe;
};
const Card = ({ item }: Props) => {
  //indirim oranı verisi varsa idirimli fiyatı hesapla
  const price = calcDiscount(item.price, item.discount);
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white rounded-[16px] lg:rounded-[28px] p-[8px]">
          <div className="relative rounded-[12px] lg:rounded-[24px]">
            <Badge discount={item.discount} />
            <img src="/shoes2.svg" className="w-full h-full object-cover rounded" />
          </div>
        </div>
        <h2 className="line-clamp-2 mt-5 mb-4 font-bold lg:text-[20px]">
          {item.name}
        </h2>
      </div>
      <Link
        to={`/detail/${item.id}`}
        className=" bg-dark text-white font-medium transition hover:bg-black py-[8px] px-[16px] rounded-[8px]"
      >
        Ürünü Görüntüle -{" "}
        <span className={item.discount ? "text-orange-500" : "text-white"}>
          {" "}
          ${price}
        </span>
      </Link>
    </div>
  );
};

export default Card;
