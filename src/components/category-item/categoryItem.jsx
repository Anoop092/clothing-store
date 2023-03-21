import React from "react";
import { useNavigate } from "react-router-dom";
import "./categoryItem.styles.scss";

const CategoryItem = ({ id, title, url }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/shop/${title}`);
  };
  return (
    <div className="directory-category-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
