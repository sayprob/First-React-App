import { withRouter } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";

function UpdateProduct(props) {
  const [data, setData] = useState([]);
  console.warn("sex");
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  });
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>UpdateProduct</h1>
        <input
          type="text"
          defaultValue={data.name}
          className="form-control"
        ></input>
        <br />
        <br />
        <input
          type="text"
          defaultValue={data.price}
          className="form-control"
        ></input>
        <br />
        <br />
        <input
          type="text"
          defaultValue={data.description}
          className="form-control"
        ></input>
        <br />
        <br />
        <input type="file" defaultValue={data.file_path}></input>
        <br />
        <br />
        <img
          style={{ width: 100 }}
          src={"http://localhost:8000/" + data.file_path}
        ></img>
        <br />
        <br />
        <button>UpdateProduct</button>
      </div>
    </>
  );
}
export default withRouter(UpdateProduct);
