type Props={
  open:() => void
}

const Buttons = ({open}:Props) => {
  return (
    <div className="mt-5 gap-10 flex lg:hidden">
    <button onClick={open} className="flex-1 flex justify-between items-center gap-4 bg-white rounded-md p-1 px-4">
      Filterler
      <img src="/list.svg" alt="" />
    </button>
    <button className="flex-1 flex justify-between  bg-white rounded-md p-1 px-4 items-center gap-4">
      Sırala
      <img src="/list.svg" alt="" />
    </button>
  </div>

  )
}

export default Buttons