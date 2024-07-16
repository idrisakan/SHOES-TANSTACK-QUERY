

const Badge = ({discount}:{discount?:number}) => {
  return (
    <span className={`absolute ${discount ? 'bg-orange-500' : 'bg-red-500'} rounded-tl-[24px] rounded-br-[24px] text-sm font-semibold text-white px-4 py-3`}>
    {discount ? '%' + discount + 'off' : 'New'}
    </span>
  )
}

export default Badge