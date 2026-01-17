import { useParams } from "react-router";
import VehcileDetailInfo from "../features/vehicle-detail/components-vehicle-detail/VehicleDetailInfo";
import VehicleDetailPrice from "../features/vehicle-detail/components-vehicle-detail/VehicleDetailPrice";
import VehicleDetailSeller from "../features/vehicle-detail/components-vehicle-detail/VehicleDetailSeller";
import VehcileDetailMainInfo from "../features/vehicle-detail/components-vehicle-detail/VehicleDetailMainInfo";
import VehicleDetailDescription from "../features/vehicle-detail/components-vehicle-detail/VehicleDetailDescription";
import VehicleDetailRecomendation from "../features/vehicle-detail/components-vehicle-detail/VehicleDetailRecomendation";

export default function VehicleDetail() {
  const params = useParams();

  console.log(params.id);

  return (
    <div className="">
      <img
        src="/empty-bg.svg"
        className="object-cover w-249 h-75.5 rounded-2xl mt-7"
      />
      <div className="flex gap-4 mt-4.5">
        <div className="flex flex-col gap-7">
          <VehcileDetailMainInfo
            vehicleName="Nama Kendaraan"
            vehicleSystem="Mesin - Transisi"
            vehicleFeature={["BAHAN BAKAR", "JARAK TEMPUH", "TRANSMISI"]}
          />
          <VehcileDetailInfo />
          <VehicleDetailDescription />
          <VehicleDetailRecomendation />
        </div>
        <div className="flex flex-col gap-6">
          <VehicleDetailPrice />
          <VehicleDetailSeller />
        </div>
      </div>
    </div>
  );
}
