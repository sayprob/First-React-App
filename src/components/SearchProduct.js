import Header from "./Header";
import { Table } from "react-bootstrap";
import { useState } from "react";

function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    console.warn(key);

    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Search Product"
        ></input>
        <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 75 }}
                  src={"http://localhost:8000/" + item.file_path}
                ></img>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default SearchProduct;
