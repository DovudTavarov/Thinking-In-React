import { useState } from "react";
import SearchingBar from "./SearchingBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable() {
  const [search, setSearch] = useState("");
  const [isStocked, setIsStocked] = useState(false);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleCheckBox = () => {
    setIsStocked((prev) => !prev);
  };
  return (
    <div className="App">
      <div>
        <SearchingBar
          handleCheckBox={handleCheckBox}
          handleSearch={handleSearch}
        />
        <ProductTable isStocked={isStocked} search={search} />
      </div>
    </div>
  );
}
