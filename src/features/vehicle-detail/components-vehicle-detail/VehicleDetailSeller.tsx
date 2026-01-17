export default function VehicleDetailSeller() {
  return (
    <div className="border border-[#EDEDED] py-6 px-4 rounded-2xl bg-white w-96.75">
      <h2 className="text-2xl mb-8">Penjual</h2>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <img src="/profile-icon.svg" className="w-7.5 h-7.5" />
          <p>Automobil Jaktim | Terverifikasi</p>
        </div>

        <div className="flex gap-3">
          <img src="/pin-point-icon.svg" className="w-7.5 h-7.5" />
          <p>Duren Sawit, Jakarta Timur</p>
        </div>
      </div>
    </div>
  );
}
