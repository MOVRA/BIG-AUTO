import { useNavigate } from "react-router";
import { formatToRupiah } from "../../utils/formatToRupiah";
import { twMerge } from "tailwind-merge";

interface CardVehicleProps {
  id: string;
  src: string;
  title: string;
  price: number;
  seller: string;
  location: string;
  className?: string;
}

export default function CardVehicle({
  id,
  src,
  title,
  price,
  seller,
  location,
  className,
}: CardVehicleProps) {
  const navigate = useNavigate();

  return (
    <div
      className={twMerge(`w-55 cursor-pointer bg-white`, className)}
      onClick={() => navigate(`/vehicle/${id}`)}
    >
      <img src={src} className="w-full h-47 mb-3.25 object-cover" />
      <div className="mb-8">
        <h2 className="font-light">{title}</h2>
        <p className="font-medium">{formatToRupiah(price)}</p>
      </div>
      <div className="text-sm text-[#9E9E9E]">
        <p className="font-light">{seller}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
