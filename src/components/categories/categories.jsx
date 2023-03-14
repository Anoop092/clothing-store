import React from "react";
import Data from "../../data/categories-data";
import CategoryItem from "../category-item/categoryItem";
import "./categories.styles.scss";
const Categories = () => {
  return (
    <div className="categories-container">
      {Data.map(({ id, title, imageUrl }) => (
        <CategoryItem id={id} title={title} url={imageUrl} key={id} />
      ))}
    </div>
  );
};

export default Categories;
