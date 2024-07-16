import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";

const Gender = ({selected, setSelected}:SelectedProps) => {
  const [params, setParams] = useSearchParams();



  //numara state de varsa çıkartır yoksa ekler
  const toggle = (gender: string) => {
    const found = selected.find((i) => i === gender);
    if (found) {
      setSelected(selected.filter((i) => i !== gender));
    } else {
      setSelected([...selected, gender]);
    }
  };
  useEffect(() => {
    // seçili gender varsa aralarına ,koyu urle ekle
    if (selected.length > 0) {
      params.set("gender", selected.join(","));
      setParams(params);
    } else {
      //seçili gender yoksa urlden parametreyi kaldır
      params.delete("gender");
      setParams(params);
    }
  }, [selected]);

  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Cinsiyet</h2>
      <div className="flex gap-4 items-center ">
        <input
        checked={selected.includes('men')}
          onChange={() => {
            toggle("men");
          }}
          id="men"
          type="checkbox"
        />
        <label className="font-semibold select-none" htmlFor="men">
          Erkek
        </label>
      </div>
      <div className="flex gap-4 items-center  ">
        <input
        checked={selected.includes('women')}
          onChange={() => {
            toggle("women");
          }}
          id="women"
          type="checkbox"
        />
        <label className="font-semibold select-none" htmlFor="women">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;
