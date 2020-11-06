import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  // Función para leer los contenidos
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusquedaRecetas(busqueda);
    setConsultar(true);
  };

  return (
    <form className="col-md-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar Bebidas"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
