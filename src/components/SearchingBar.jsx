import React from "react";

export default function SearchingBar(props) {
  const { handleSearch, handleCheckBox } = props;
  return (
    <>
      <form>
        <input onChange={handleSearch} type="text" placeholder="Search..." />
        <label>
          <input onClick={handleCheckBox} type="checkbox" /> Only show products
          in stock
        </label>
      </form>
    </>
  );
}
