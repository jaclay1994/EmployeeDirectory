import React from "react";

function Table(props) {

    return (
        <table className={"table"}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      {/* <td>{props.age}</td> */}
    </tr>
  </tbody>
</table>
    );
}

export default Table
