import type { FilterBuilderTypes } from 'devextreme-react/filter-builder';

export const filter = [
  ['Product_Current_Inventory', '<>', 0],
  'or',
  [
    ['Product_Name', 'contains', 'HD'],
    'and',
    ['Product_Cost', '<', 200],
  ],
];

export const fields: FilterBuilderTypes.Field[] = [
  {
    caption: 'ID',
    dataField: 'Product_ID',
    dataType: 'number',
  }, {
    dataField: 'Product_Name',
    dataType: 'string',
  }, {
    caption: 'Cost',
    dataField: 'Product_Cost',
    dataType: 'number',
    format: 'currency',
  }, {
    dataField: 'Product_Sale_Price',
    caption: 'Sale Price',
    dataType: 'number',
    format: 'currency',
  }, {
    dataField: 'Product_Retail_Price',
    caption: 'Retail Price',
    dataType: 'number',
    format: 'currency',
  }, {
    dataField: 'Product_Current_Inventory',
    dataType: 'number',
    caption: 'Inventory',
  }, {
    dataField: 'Product_Category',
    caption: 'Category',
    dataType: 'string',
  }, {
    dataField: 'Product_Brand',
    caption: 'Brand',
    dataType: 'string',
  }, {
    dataField: 'Product_SKU',
    caption: 'SKU',
    dataType: 'string',
  }, {
    dataField: 'Product_Supplier',
    caption: 'Supplier',
    dataType: 'string',
  }, {
    dataField: 'Product_Weight',
    caption: 'Weight (kg)',
    dataType: 'number',
  }, {
    dataField: 'Product_Created_Date',
    caption: 'Created Date',
    dataType: 'date',
  }, {
    dataField: 'Product_Last_Updated',
    caption: 'Last Updated',
    dataType: 'datetime',
  },
];
