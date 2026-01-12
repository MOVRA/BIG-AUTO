import FilterHome from "../features/home/components-home/filter-home/FilterHome";

export default function Home() {
  return (
    <div className="space-y-6">
      <img src="/banner.png" className="w-[996px] h-[302px] mt-[29px]" />
      <FilterHome />
    </div>
  );
}
