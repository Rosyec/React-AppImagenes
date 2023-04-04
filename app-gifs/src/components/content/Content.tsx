import { useState } from "react";
import "../content/Content.css";
import { AddCategory, Grid } from "../export-data";

export const Content = () => {
  const [categories, setCategories] = useState(["Dragon"]);

  const addCategory = (value: string) => {
    if (categories.includes(value)) return;
    setCategories([value]);
  };

  return (
    <>
      <div className="container text-center my-5">
        <h1>Buscar imágenes</h1>
        <div className="row my-5">
          <AddCategory emitCategory={addCategory}></AddCategory>
        </div>
        {categories.map((category, i) => (
          <div key={i} className="row d-flex justify-content-center mx-3">
            <Grid key={category} category={category}></Grid>
          </div>
        ))}
      </div>
    </>
  );
};
