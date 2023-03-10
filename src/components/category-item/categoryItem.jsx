import React from 'react'
import './categoryItem.styles.scss'

const CategoryItem = ({id,title ,url}) => {
  return (
    <div className="category-container">
        <div className="background-image" style={{
          backgroundImage:`url(${url})`
        }} />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
    </div>
  )
}

export default CategoryItem