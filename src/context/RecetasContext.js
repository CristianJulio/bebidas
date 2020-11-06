import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [busquedaRecetas, setBusquedaRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, setConsultar] = useState(false);

  const { nombre, categoria } = busquedaRecetas;

  useEffect(() => {
    if (!consultar) return;
    const obtenerRecetas = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const resultadoRecetas = await Axios(url);
      setRecetas(resultadoRecetas.data.drinks);
      setConsultar(false);
    };
    obtenerRecetas();
    // eslint-disable-next-line
  }, [busquedaRecetas]);

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        setBusquedaRecetas,
        setConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
