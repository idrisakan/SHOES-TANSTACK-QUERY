const Hero = () => {
  return (
    <div className="relative mt-[24px] md:mt-[80px]">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-white ps-[40px]">
        <p className="text-[12px] md:text-[24px] ">Limited Time Only</p>
        <h1 className="font-semibold text-[20px] sm:text-[40px] md:text-[50px] lg:text-[74px]">Get %30 of</h1>
        <p className="text-[10px] md:text-[20px] text-gray">
          Sneakers made with your comfort in mind so you can put
           all of your
          focus into your next session.
        </p>
      </div>
      <img src="/bg.svg" alt="" />
    </div>
  );
};

export default Hero;
