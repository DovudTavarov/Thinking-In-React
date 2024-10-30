import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import products from "../assets/data";

export default function ProductTable(props) {
  const { search, isStocked } = props;

  const vegetables = products.filter((item) => {
    const stockFilter = isStocked ? item.stocked === true : item;
    const categoryFilter = item.category === "Vegetables";
    const searchFilter = item.name
      .toLowerCase()
      .startsWith(search.toLowerCase());
    return categoryFilter && searchFilter && stockFilter;
  });
  const fruits = products.filter((item) => {
    const stockFilter = isStocked ? item.stocked === true : item;
    const categoryFilter = item.category === "Fruits";
    const searchFilter = item.name
      .toLowerCase()
      .startsWith(search.toLowerCase());
    return categoryFilter && searchFilter && stockFilter;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>
        {fruits.length > 0 && (
          <>
            <tr style={{ backgroundColor: "grey" }}>
              <ProductCategoryRow name="Fruits" />
            </tr>
            {fruits.map((item) => (
              <ProductRow key={item.id} item={item} />
            ))}
          </>
        )}
        {vegetables.length > 0 && (
          <>
            <tr style={{ backgroundColor: "grey" }}>
              <ProductCategoryRow name="Vegetables" />
            </tr>
            {vegetables.map((item) => (
              <ProductRow key={item.id} item={item} />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}
