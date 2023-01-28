import React from "react";

function CategoryFilter({ categories, settingCategory, oneCategory}) {
  function handleCatChange (catgry){
    settingCategory(catgry)
  }
  const categoryList = categories.map((category) => {
  const className = category === oneCategory ? "oneCategory" : null;
    return(
     <button 
     key={category}
     className={className} 
     onClick={() => handleCatChange(category)}
     >
     {category}
     </button>
     )
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
