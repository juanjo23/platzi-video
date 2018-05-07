import React from 'react';
import Category from './category';
import Search from '../../components/widgets/search';

const Categories = (props) =>  (
  <div>
    <Search> <div> HOla </div> </Search>
    {
      props.categories.map((item) => (
        <Category handleClick={props.handleClick} key={item.id } {...item}/>
      ))
    }
  </div>
);

export default Categories;
