import { useFilterContext } from "../../context/filter_context";
import { GridView, ListView } from "../ui";

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();

  if (filtered_products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        No books matched your search criteria
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={filtered_products} />;
  }

  return <GridView products={filtered_products} />;
};

export default ProductList;
