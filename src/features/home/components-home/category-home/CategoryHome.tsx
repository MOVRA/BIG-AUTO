import { carCategory } from "../../../../db/sample";

export default function CategoryHome() {
  return (
    <div className="w-249 border border-[#EDEDED] p-4 rounded-2xl bg-white">
      <h1 className="font-medium text-3xl mb-6">Kategori</h1>
      <div className="flex gap-6 justify-center">
        {carCategory.map((i) => (
          <div key={i.id} className="w-21 gap-2">
            <img src={i.src} className="w-full h-21 object-cover" />
            <p className="text-center mt-2">{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
