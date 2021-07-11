import React, { useState } from "react";

function Categories(props) {
  const [categories, setCategories] = useState([props.categories]);

  const AddCategory = () => {
    console.log(categories);
    setCategories(categories.push("Machinery"));
    console.log(categories);
  };
  return (
    <React.Fragment>
      <h1>categories</h1>
      <button onClick={() => AddCategory()}>Add Category</button>
    </React.Fragment>
  );
}
export default Categories;
