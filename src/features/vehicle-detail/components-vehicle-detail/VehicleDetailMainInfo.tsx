interface VehcileDetailMainInfoProps {
  vehicleName: string;
  vehicleSystem: string;
  vehicleFeature: string[];
}

export default function VehcileDetailMainInfo({
  vehicleName,
  vehicleSystem,
  vehicleFeature,
}: VehcileDetailMainInfoProps) {
  return (
    <div className="flex flex-col gap-12 w-148.25 border border-[#EDEDED] p-4 rounded-2xl bg-white">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">{vehicleName}</h2>
        <p>{vehicleSystem}</p>
      </div>
      <div className="flex gap-4">
        {vehicleFeature.map((i, idx) => (
          <span
            className={`pr-4 ${
              idx + 1 != vehicleFeature.length && "border-[#C2C2C2] border-r "
            }`}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
