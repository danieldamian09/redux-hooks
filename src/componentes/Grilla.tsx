import React, { FC, useEffect, useState } from "react";

import { buscarPersonajes } from "../services/personaje.services";
import { useSelector } from "../store/store";
import Personaje from "../types/personaje.types";

const Grilla: FC = () => {
  const busqueda = useSelector((estado) => estado.personajes.busqueda);
  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  useEffect(() => {
    buscarPersonajes(busqueda).then((data: Personaje[]) => {
      setPersonajes(data);
    });
  }, [busqueda]);

  if (personajes.length === 0) return <></>;

  return (
    <div className="App-table" style={{ marginTop: 50 }}>
      {personajes.map((personaje) => {
        return (
          <div
            key={`key_${personaje.id}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px"
            }}
          >
            <label style={{ marginBottom: 5 }}>Nombre: {personaje.name}</label>
            <img src={personaje.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Grilla;
