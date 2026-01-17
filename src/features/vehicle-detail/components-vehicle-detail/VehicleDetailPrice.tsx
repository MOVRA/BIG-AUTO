import { Button } from "../../../common/button";
import { formatToRupiah } from "../../../utils/formatToRupiah";

export default function VehicleDetailPrice() {
  return (
    <div className="border border-[#EDEDED] py-6 px-4 rounded-2xl bg-white w-96.75 h-108">
      <h2 className="text-3xl mb-3">{formatToRupiah(120000000)}</h2>

      <div className="p-2 bg-[#F5F5F5] text-lg my-12">
        <p className="pb-8 font-medium">Estimasi Perhitungan Kredit:</p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Down Payment</p>
            <p className="font-bold">{formatToRupiah(50000)}</p>
          </div>
          <div className="flex justify-between">
            <p>Cicilan</p>
            <p className="font-bold">{formatToRupiah(3500000)} x 20 bulan</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="fill">Book Test Drive</Button>
        <Button>Chat Penjual</Button>
      </div>
    </div>
  );
}
