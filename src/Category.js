import React, { useState } from "react";

const Category = () => {
  const [categ, setCateg] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="">
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const res = [...categ, { name: name, description: description }];
            setCateg(res);
          }}
        >
          Add
        </button>
      </form>

      <h1>Categories</h1>
      <div>
        <table>
          {categ.map((c, index) => (
            <tr key={index}>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    const res = categ.filter((c) => categ.indexOf(c) != index);
                    setCateg(res);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Category;
