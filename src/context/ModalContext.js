import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(idReceta === null) return;

    const consultarInfo = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await Axios(url);
      setInfo(resultado.data.drinks[0]);
    }
    consultarInfo();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        setIdReceta,
        setInfo,
        info
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;