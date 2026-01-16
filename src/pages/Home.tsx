import { carData } from "../db/sample";
import FilterHome from "../features/home/components-home/filter-home/FilterHome";
import CategoryHome from "../features/home/components-home/category-home/CategoryHome";
import CardVehicleHome from "../features/home/components-home/card-vehicle-home/CardVehicleHome";

export default function Home() {
  return (
    <div className="space-y-6">
      <img src="/banner.png" className="w-[996px] h-[302px] mt-[29px]" />
      <FilterHome />
      <CategoryHome />
      <div className="flex flex-wrap w-249 gap-6 border border-[#EDEDED] p-4 rounded-2xl mb-7.25 bg-white">
        {carData.map((i) => (
          <CardVehicleHome
            id={i.id}
            key={i.id}
            src={i.src}
            title={i.title}
            price={i.price}
            seller={i.seller}
            location={i.location}
          />
        ))}
      </div>
    </div>
  );
}
