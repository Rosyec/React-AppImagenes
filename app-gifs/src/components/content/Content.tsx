import React, { useState } from 'react'
import '../content/Content.css'
import { AddCategory, Grid } from '../export-data';

export const Content = () => {
  const [categories, setCategories] = useState(['Dragon']);

  const addCategory = (value: string) => {
    if (categories.includes(value)) return;
    setCategories([value]);
    // setCategories([...categories, value]); //Lo comento para que no agregue categorias sino que haga siempre una sola busqueda
    // setCategories( (miCatgeria) => [ ...miCatgeria, '' ] );
  }

  return (
    <>
      <div className='container text-center my-5'>
        <h1>Buscar imágenes</h1>
        <div className="row my-5">
          <AddCategory emitCategory={addCategory} ></AddCategory>
        </div>
        {
          categories.map((category, i) => (
            <div key={i} className="row d-flex justify-content-center">
              <Grid key={category} category={category} ></Grid>
            </div>
          ))
        }
      </div>
    </>
  )
}

