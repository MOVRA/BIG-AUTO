import { Input } from "../../../../common/input";
import { Button } from "../../../../common/button";
import DateInput from "../../../../common/date-input/DateInput";

export default function FilterHome() {
  return (
    <div className="w-249 h-51 border border-[#EDEDED] p-4 rounded-2xl">
      <h1 className="font-medium text-3xl">Rental Mobil</h1>

      <div className="flex gap-8">
        <div className="flex gap-8 mt-6">
          <div className="flex flex-col gap-1">
            <label className="">Lokasi Pickup</label>
            <Input placeholder="Lokasi Pickup" className="h-8 w-75" />
          </div>
        </div>

        <div className="flex gap-8 mt-6">
          <div className="flex flex-col gap-1">
            <label className="">Tanggal Mulai</label>
            <DateInput className="h-8 w-75" placeholderText="Tanggal Mulai" />
          </div>
        </div>

        <div className="flex gap-8 mt-6">
          <div className="flex flex-col gap-1">
            <label className="">Tanggal Selesai</label>
            <DateInput className="h-8 w-75" placeholderText="Tanggal Selesai" />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button variant="fill" className="py-1.5 px-4 w-26.25 h-8 text-xs">
          Cari Rental
        </Button>
      </div>
    </div>
  );
}
