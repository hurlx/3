import Header from "@/components/Header";
import Item from "@/components/Item";
import ShoeShowcase from "@/components/ShoeShowcase";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {

  return (
    <div className="overflow-hidden select-none">
      <Header />
      <ShoeShowcase />
      <Item />
      <ProductShowcase />

    </div>
  );
}
