import CardVehicle from "../../../common/card-vehicle/CardVehicle";
import { carData } from "../../../db/sample";

export default function VehicleDetailRecomendation() {
  return (
    <div>
      <h2 className="text-2xl mb-3">Kendaraan Rekomendasi Lainnya</h2>
      <div className="flex flex-wrap w-148.25 gap-6 border border-[#EDEDED] p-4 rounded-2xl mb-7 bg-white">
        {carData.map((i) => (
          <CardVehicle
            id={i.id}
            key={i.id}
            src={i.src}
            title={i.title}
            price={i.price}
            seller={i.seller}
            className="w-66.75"
            location={i.location}
          />
        ))}
      </div>
    </div>
  );
}
