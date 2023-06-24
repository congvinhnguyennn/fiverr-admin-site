import React, { useState } from 'react';
import Collapse from 'react-collapse';

function ProductList() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>
        {isExpanded ? 'Ẩn nội dung' : 'Hiện nội dung'}
      </button>

      <Collapse isOpened={isExpanded}>
        <p>Nội dung sản phẩm...</p>
      </Collapse>
    </div>
  );
}

export default ProductList;