import { useParams } from "react-router";
import VehcileMainInfo from "../features/vehicle-detail/components-vehicle-detail/VehicleMainInfo";

export default function VehicleDetail() {
  const params = useParams();

  console.log(params.id);

  return (
    <div className="">
      <img
        src="/empty-bg.svg"
        className="object-cover w-249 h-75.5 rounded-2xl mt-7"
      />
      <VehcileMainInfo
        vehicleName="Nama Kendaraan"
        vehicleSystem="Mesin - Transisi"
        vehicleFeature={["BAHAN BAKAR", "JARAK TEMPUH", "TRANSMISI"]}
      />
    </div>
  );
}
