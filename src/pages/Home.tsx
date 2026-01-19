import { carData } from "../db/sample";
import { useAuthStore } from "../stores/useAuthStore";
import CardVehicle from "../common/card-vehicle/CardVehicle";
import FilterHome from "../features/home/components-home/filter-home/FilterHome";
import CategoryHome from "../features/home/components-home/category-home/CategoryHome";

export default function Home() {
  const { user } = useAuthStore();

  console.log(user);

  return (
    <div className="space-y-6">
      <img src="/banner.png" className="w-[996px] h-[302px] mt-[29px]" />
      <FilterHome />
      <CategoryHome />
      <div className="flex flex-wrap w-249 gap-6 border border-[#EDEDED] p-4 rounded-2xl mb-7.25 bg-white">
        {carData.map((i) => (
          <CardVehicle
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
