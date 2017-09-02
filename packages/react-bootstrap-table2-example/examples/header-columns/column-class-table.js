/* eslint no-unused-vars: 0 */
import React from 'react';

import { BootstrapTable } from 'react-bootstrap-table2';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i += 1) {
    const id = startId + i;
    products.push({
      id,
      name: `Item name ${id}`,
      price: 2100 + i
    });
  }
}

addProducts(5);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  headerClasses: 'demo-row-odd'
}, {
  dataField: 'price',
  text: 'Product Price',
  headerClasses: (column, colIndex) => {
    if (colIndex % 2 === 0) return 'demo-row-even';
    return 'demo-row-odd';
  }
}];

export default () => (
  <div>
    <BootstrapTable keyField="id" data={ products } columns={ columns } />
    <pre className="prettyprint lang-js"><code className="language-javascript">{`
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  headerClasses: 'demo-row-odd'
}, {
  dataField: 'price',
  text: 'Product Price',
  headerClasses: (column, colIndex) => {
    if (colIndex % 2 === 0) return 'demo-row-even';
    return 'demo-row-odd';
  }
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
    `}
    </code></pre>
  </div>
);