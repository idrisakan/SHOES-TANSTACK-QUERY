import { Shoe } from "../../types";
import calcDiscount from "../../utils/calcDiscount";

const Head = ({ data }: { data: Shoe }) => {
    // indirim oranı geldiyse indirimli fiyatı hesapla yoksa normal fiyatı al 
  const price = calcDiscount(data.price, data.discount)
  return (
    <div className="flex flex-col gap-4">
      <span
        className={` ${
          data.discount ? "bg-orange-400" : "bg-blue"
        } rounded-[12px] py-3 px-4 text-white w-fit`}
      >
        {" "}
        {data.discount ? `%${data.discount} İndirim` : "New Release"}
      </span>
      <h1 className="text-3xl font-semibold">{data.name}</h1>
      <p className="text-[24px]">
        <span className="font-semibold text-blue  pe-3">${price}</span>
        <span className="line-through">(${data.price})</span>
      </p>
    </div>
  );
};

export default Head;

