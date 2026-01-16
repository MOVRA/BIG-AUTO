import { useNavigate } from "react-router";
import { formatToRupiah } from "../../../../utils/formatToRupiah";

interface CardVehicleHomeProps {
  id: string;
  src: string;
  title: string;
  price: number;
  seller: string;
  location: string;
}

export default function CardVehicleHome({
  id,
  src,
  title,
  price,
  seller,
  location,
}: CardVehicleHomeProps) {
  const navigate = useNavigate();

  return (
    <div
      className="w-55 cursor-pointer bg-white"
      onClick={() => navigate(`/vehicle/${id}`)}
    >
      <img src={src} className="w-55 h-47 mb-3.25 object-cover" />
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
