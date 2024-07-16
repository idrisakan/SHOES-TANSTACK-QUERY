import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


type Props = {
  value:string,
  setValue:React.Dispatch<React.SetStateAction<string>>
}
const Price = ({value,setValue}:Props) => {
  const [params, setParams] = useSearchParams();


 
  //value statenin debounce uygulanmış versiyonu
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    // seçili price varsa aralarına ,koyu urle ekle
    if (+debouncedValue > 0) {
      params.set("price", debouncedValue);
      setParams(params);
    } else {
      //seçili gender yoksa urlden parametreyi kaldır
      params.delete("price");
      setParams(params);
    }
  }, [debouncedValue]);
  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Cinsiyet</h2>
      <input
      value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-w-full"
        type="range"
        min={0}
        max={1000}
      />
      <div className="flex justify-between">
        <span>${value}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
