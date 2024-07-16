

const Error = ({message}:{message:string}) => {
  return (
    <div className="bg-red-500 text-center rounded-lg p-4 text-white">
    <div className="mb-4">
      Üzgünüz bir hata meydana geldi
    </div>
    <p>{message}</p>
    </div>
  );
};

export default Error;
