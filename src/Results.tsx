import React from 'react';
import Table from 'react-bootstrap/Table';
import {Item} from './items'

interface data {
  items: Item[]
}

function Results(props: data) {
  const bodyData = props.items.map((item,index )=> {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.code}</td>
      </tr>
    )
  })
  return (
    <Table striped bordered hover  variant="dark">
      <thead>
        <tr>
          <th>Item</th>
          <th>Category</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
          {bodyData}
      </tbody>
    </Table>
  );
}


export default Results
