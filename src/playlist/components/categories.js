import React from 'react';
import Category from './category';

const Categories = (props) =>  (
  <div>
    {
      props.categories.map((item) => (
        <Category handleClick={props.handleClick} key={item.id } {...item}/>
      ))
    }
  </div>
);

export default Categories;
